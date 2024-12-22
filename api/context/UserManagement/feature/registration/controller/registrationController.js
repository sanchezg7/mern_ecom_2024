import express from "express";
import UserService from "../service/registrationService.js"

const router = express.Router()

router.post("/user", (req, res) => {
    UserService.register(req, res).then(user => {
        res.json(user);
    }).catch(e => {
        res.status(400).json({error: e.toString()});
    });
});

export default router;
