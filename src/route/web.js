import express from "express";
import homeController from '../controller/homeController';
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:id', homeController.getDetailPage)
    router.get('/about', (req, res) => {
        res.send(`Um minh la Nam Hoang ha :3`)
    })

    return app.use('/', router)
}


export default initWebRoute;