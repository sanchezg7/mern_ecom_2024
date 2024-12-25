import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import authFeature from "./context/UserManagement/feature/authentication/controller/authenticationController.js";
import registrationFeature from "./context/UserManagement/feature/registration/controller/registrationController.js";
import storeFeature from './context/ECommerce/feature/admin/storeController.js';
import {
    enforceAdminRoleOrThrowMdlw,
    injectUserContextMdlw
} from "./context/UserManagement/feature/authentication/controller/authenticationMiddleware.js";

dotenv.config();

mongoose.connect("mongodb://admin:admin@localhost:27017")
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
app.use(registrationFeature);
app.use('/admin', injectUserContextMdlw, enforceAdminRoleOrThrowMdlw, storeFeature);

const PORT = 8000;
app.listen(8000, () => {
   console.log(`Running on ${PORT}`)
})