import express from "express";

const router = express.Router()

router.get("/users", (req, res) => {
    res.json({data: "Ryan Zen David Kevn Sara Jane"})
});

export default router;