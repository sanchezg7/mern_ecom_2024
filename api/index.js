import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import authRoutes from "./controller/auth.js";

dotenv.config();

mongoose.connect("mongodb://localhost:27017")
    .then(() => {
       console.log("DB Connected.");
    })
    .catch(() => {
       console.log("Unable to connect to DB.")
    })

const app = express();
/**
 * https://www.npmjs.com/package/morgan#dev
 * dev
 *
 * Concise output colored by response status for development use. The :status token will be colored green for success codes, red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for information codes.
 */
app.use(morgan("dev"));
app.use((req, res, next) => {
   console.log("middleware");
   next();
});
app.use(authRoutes);

const PORT = 8000;
app.listen(8000, () => {
   console.log(`Running on ${PORT}`)
})