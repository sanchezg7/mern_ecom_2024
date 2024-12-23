import express from "express";
import UserService from "../service/registrationService.js"
import CreateUserDto from "./CreateUserDto.js";
import jwt from "jsonwebtoken";

const router = express.Router();

const TODO_REPLACE_SECRET_TOKEN = "TODO_REPLACE_ME";
const TOKEN_EXPIRES_IN = "7d"; // 7 days

router.post("/user", (req, res) => {
    const userDto = new CreateUserDto(req.body);
    UserService.register(userDto).then(
        /**
         * @param {User} user
         */
        user => {
        // create JWT
        const token = jwt.sign({_id: user._id }, TODO_REPLACE_SECRET_TOKEN, { expiresIn: TOKEN_EXPIRES_IN})
        res.json({
            token,
            user: {
                name: user.name,
                email: user.email,
                address: user.address,
                role: user.role,
            }
        });
    }).catch(e => {
        res.status(400).json({error: e.toString()});
        console.error(e.toString());
    });
});

export default router;
