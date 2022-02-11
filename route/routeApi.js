

import express from "express"
import homeController from "../controllers/homeController.js"


let router = express.Router()

let apiRoute = (app) => {

    router.get('/', homeController.getHome);
    router.get('/my-list', homeController.getMyTodoList);

    return app.use('/api',router)
}

export default apiRoute



