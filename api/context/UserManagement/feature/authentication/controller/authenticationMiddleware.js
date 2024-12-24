import jwt from 'jsonwebtoken';
import {isAdmin} from "../domain/Admin.js";
import { TODO_REPLACE_SECRET_TOKEN } from "../../common/domain/session.js";
import userQueryHandler from "../../common/query/userQueryHandler.js";
import FindUserByEmailQuery from "../../common/query/FindUserByEmailQuery.js";
import FindUserByIdQuery from "../../common/query/FindUserByIdQuery.js";

/**
 * @typedef token
 * @property _id
 * @property expires
 */

export const injectUserContextMdlw = (req, res, next) => {
 try {
     /**
      *
      * @type {token}
      */
    const decodedToken = jwt.verify(req.headers.authorization, TODO_REPLACE_SECRET_TOKEN);
    req.user = { _id: decodedToken._id };
    next();
 } catch (err) {
     return res.status(401).send({"message": err.message});
 }
}

export const enforceAdminRoleOrThrowMdlw = async (req, res, next) => {
    try {
        const { _id: userId } = req.user;
        const query = new FindUserByIdQuery(userId)
        const user = await userQueryHandler.findUserById(query);
        if( !isAdmin(user)){
            return res.status(401).send("Unauthorized");
        } else {
            next();
        }

    } catch (err) {
        console.error(err);
    }
}