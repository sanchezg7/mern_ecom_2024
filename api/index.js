import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./controller/auth.js";

dotenv.config();

const app = express();

mongoose.connect("mongodb://localhost:27017")
    .then(() => {
       console.log("DB Connected.");
    })
    .catch(() => {
       console.log("Unable to connect to DB.")
    })


app.use((req, res, next) => {
   console.log("middleware");
   next();
});
app.use(authRoutes);

const PORT = 8000;
app.listen(8000, () => {
   console.log(`Running on ${PORT}`)
})