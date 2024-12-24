import jwt from 'jsonwebtoken';

import { TODO_REPLACE_SECRET_TOKEN } from "../../common/domain/session.js";

/**
 * @typedef token
 * @property _id
 * @property expires
 */

export const authenticationMiddleware = (req, res, next) => {
 try{
     /**
      *
      * @type {token}
      */
    const decodedToken = jwt.verify(req.headers.authorization, TODO_REPLACE_SECRET_TOKEN);
    const { _id } = decodedToken;
    req.user = { _id };
 }catch (err) {
     return res.status(401)
 }
}