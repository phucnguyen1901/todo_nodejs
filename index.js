import express from "express";
import dotenv from 'dotenv'
import apiRoute from "./route/routeApi.js"
import userRoute from "./route/routeUser.js";
import flash from "express-flash"
import session from "express-session"
import db from './configs/db.config.js'

dotenv.config()

db.connect();

const app = express();
const port = process.env.PORT || 3333

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.set('views','./views');
app.set('view engine', 'pug')
app.use(express.static('publics'))
app.use( session({
    secret: "scret",
    cookie: { maxAge : 60000},
    resave: false,
    saveUninitialized: false
}))
app.use( flash() )


apiRoute(app)
userRoute(app)

app.post('/test', (req,res) => {
    console.log(req.body);
    res.send(req.body);

})

app.listen(port, () => console.log("Server is listening to port: "+port) );

