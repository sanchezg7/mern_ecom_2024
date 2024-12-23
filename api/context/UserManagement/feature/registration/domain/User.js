import FindUserByEmailQuery from "../query/FindUserByEmailQuery.js";
import qHandler from "../query/registrationQueryHandler.js";
import {hashPassword} from "../../authentication/domain/auth.js";
import RegisterUserCommand from "../command/RegisterUserCommand.js";
import cHandler from "../command/registrationCommandHandler.js";
import User from "../../common/domain/User.js";

/**
 *
 * @param {CreateUserDto} userWip
 * @returns {User}
 */
export async function create(userWip) {
    await User.validateOrThrow(userWip);

    const isUnique = await isEmailUnique(userWip);
    if(!isUnique){
        throw new Error("User already exists");
    }

    const hashedPassword = await hashPassword(userWip.password);
    const { name, email, password } = userWip;
    const command = new RegisterUserCommand(email, name, hashedPassword);
    return cHandler.registerUser(command);
}

/**
 *
 * @param {User} user
 * @returns {boolean}
 */
async function isEmailUnique(user) {
    const query = new FindUserByEmailQuery(user.email);
    const existingUser = await qHandler.findUserByEmail(query);
    let isUnique = true;
    if(existingUser){
        isUnique = false;
    }
    return isUnique;
}