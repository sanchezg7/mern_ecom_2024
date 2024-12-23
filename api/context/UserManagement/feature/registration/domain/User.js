import FindUserByEmailQuery from "../query/FindUserByEmailQuery.js";
import qHandler from "../query/registrationQueryHandler.js";
import {hashPassword} from "../../common/domain/auth.js";
import RegisterUserCommand from "../command/RegisterUserCommand.js";
import cHandler from "../command/registrationCommandHandler.js";

/**
 *
 * @param {CreateUserDto} userWip
 * @returns {User}
 */
export async function create(userWip) {
    const { name, email, password } = userWip;
    if(!name.trim()) {
        throw new Error("Name is required");
    }
    if(!email){
        throw new Error("Email is required");
    }
    if(!password || password.length < 6) {
        throw new Error("Password is required and at least 6 characters long");
    }

    const isUnique = await isEmailUnique(userWip);
    if(!isUnique){
        throw new Error("User already exists");
    }

    const hashedPassword = await hashPassword(userWip.password);

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