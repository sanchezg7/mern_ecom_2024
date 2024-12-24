import express from "express";
import authSvc from "../authenticationService.js";
import {TODO_REPLACE_SECRET_TOKEN, TOKEN_EXPIRES_IN} from "../../common/domain/session.js";
import jwt from "jsonwebtoken";

const router = express.Router()

router.get("/users", (req, res) => {
    res.json({data: "Ryan Zen David Kevn Sara Jane"})
});

router.post("/login", (req, res) => {
    authSvc.authenticate(req.body)
        .then(user => {
            const token = jwt.sign({_id: user._id }, TODO_REPLACE_SECRET_TOKEN, { expiresIn: TOKEN_EXPIRES_IN})
            res.status(200).json({
                token,
                user: {
                    name: user.name,
                    email: user.email,
                    address: user.address,
                    role: user.role
                }
            })
        })
        .catch(e => {
            res.status(400).json({error: e.toString()});
        });
});

export default router;