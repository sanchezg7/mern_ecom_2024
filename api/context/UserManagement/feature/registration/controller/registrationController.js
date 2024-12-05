import express from "express";
// import User from "../../../repository/user.js";
import * as User from "../../../User.js";

const router = express.Router()

router.post("/user", (req, res) => {
    register(req, res).then();
});

// Application Service Layer
export const register = async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.json(user);
    } catch (e) {
        console.log(e);
    }
}

export default router;
