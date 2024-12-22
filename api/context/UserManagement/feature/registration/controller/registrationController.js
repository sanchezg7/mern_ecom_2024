import express from "express";
import UserService from "../service/registrationService.js"
import CreateUserDto from "./CreateUserDto.js";

const router = express.Router()

router.post("/user", (req, res) => {
    const userDto = new CreateUserDto(req.body);
    UserService.register(userDto).then(user => {
        res.json(user);
    }).catch(e => {
        res.status(400).json({error: e.toString()});
        console.error(e.toString());
    });
});

export default router;
