import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import authFeature from "./feature/authentication/controller/authController.js";
import registrationFeature from "./feature/registration/controller/registrationController.js";

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
 * https://www.npmjs.com/package/morgan#common
 * Standard Apache common log output.
 *
 */
app.use(morgan("common"));
// expect all requests to be in json format and parse accordingly
app.use(express.json());
app.use((req, res, next) => {
   console.log("middleware");
   next();
});
app.use(authFeature);
app.use(registrationFeature)

const PORT = 8000;
app.listen(8000, () => {
   console.log(`Running on ${PORT}`)
})