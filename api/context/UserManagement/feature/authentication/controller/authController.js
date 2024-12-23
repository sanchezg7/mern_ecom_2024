import express from "express";
import authSvc from "../authenticationService.js";

const router = express.Router()

router.get("/users", (req, res) => {
    res.json({data: "Ryan Zen David Kevn Sara Jane"})
});

router.post("/login", (req, res) => {
    authSvc.authenticate(req.body)
        .then(result => {
            res.status(200).json({
                ...result
            })
        })
        .catch(e => {
            res.status(400).json({error: e.toString()});
        });
});

export default router;