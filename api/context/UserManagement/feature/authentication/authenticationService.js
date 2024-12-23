import FindUserByEmailQuery from "../common/query/FindUserByEmailQuery.js";
import qHandler from "../common/query/userQueryHandler.js";
import {comparePassword} from "../common/domain/auth.js";
import jwt from "jsonwebtoken";

const TODO_REPLACE_SECRET_TOKEN = "TODO_REPLACE_ME";
const TOKEN_EXPIRES_IN = "7d"; // 7 days

/**
 *
 * @param userWip
 * @returns {Promise<void>}
 */
async function authenticate(userWip) {

    const { email, password } = userWip;


    // ensure email exists

    const query = new FindUserByEmailQuery(email);
    const user = await qHandler.findUserByEmail(query);
    if(!user){
        throw new Error("Authentication unsuccessful");
    }

    if(!password || password.length < 6){
        throw new Error("Authentication unsuccessful");
    }

    // ensure password compare is successful
    const isMatch = await comparePassword(password, user.password);
    if(isMatch){
        // refactor
        return {token: jwt.sign({_id: user._id }, TODO_REPLACE_SECRET_TOKEN, { expiresIn: TOKEN_EXPIRES_IN})}
    }
}


export default {
    authenticate
}