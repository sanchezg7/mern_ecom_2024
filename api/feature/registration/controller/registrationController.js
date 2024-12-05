import express from "express";

const router = express.Router()

router.post("/user", (req, res) => {
    register(req, res).then();
});

export default router;
export const register = async (req, res) => {
    console.log(req.body);
}