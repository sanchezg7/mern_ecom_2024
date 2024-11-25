import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb://localhost:27017")
    .then(() => {
       console.log("DB Connected.");
    })
    .catch(() => {
       console.log("Unable to connect to DB.")
    })

app.get("/users", (req, res) => {
   res.json({"message": "success"})
});

const PORT = 8000;
app.listen(8000, () => {
   console.log(`Running on ${PORT}`)
})