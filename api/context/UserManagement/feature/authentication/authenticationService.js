import FindUserByEmailQuery from "../common/query/FindUserByEmailQuery.js";
import qHandler from "../common/query/userQueryHandler.js";
import {comparePassword} from "../common/domain/auth.js";
import jwt from "jsonwebtoken";

const TODO_REPLACE_SECRET_TOKEN = "TODO_REPLACE_ME";
const TOKEN_EXPIRES_IN = "7d"; // 7 days

/**
 *
 * @param userWip
 * @returns {User}
 */
async function authenticate(userWip) {
    const { email, password } = userWip;
    const query = new FindUserByEmailQuery(email);
    /**
     *
     * @type {User}
     */
    const user = await qHandler.findUserByEmail(query);
    if(!user){
        throw new Error("Authentication unsuccessful");
    }

    if(!password || password.length < 6){
        throw new Error("Authentication unsuccessful");
    }

    const isMatch = await comparePassword(password, user.password);
    if(isMatch){
        return user;
        // // refactor
        // return {token: jwt.sign({_id: user._id }, TODO_REPLACE_SECRET_TOKEN, { expiresIn: TOKEN_EXPIRES_IN})}
    }
}


export default {
    authenticate
}