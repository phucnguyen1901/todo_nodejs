

import express from "express"
import userController from "../controllers/userController.js"


let router = express.Router()

let userRoute = (app) => {

    router.get('/login', userController.loginPage);
    router.get('/register', userController.registerPage);
    router.post('/postLogin', userController.loginUser)
    router.post('/postRegister', userController.registerUser)


    return app.use('/',router)
}

export default userRoute