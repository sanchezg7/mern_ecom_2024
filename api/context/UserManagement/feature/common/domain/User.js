import FindUserByEmailQuery from "../query/FindUserByEmailQuery.js";
import qHandler from "../query/registrationQueryHandler.js";

/**
 *
 * @param {CreateUserDto} userWip
 * @throws {Array[String]}
 */
async function validateOrThrow(userWip) {
    const { name, email, password } = userWip;
    const errors = [];
    if(!name.trim()) {
        errors.push("Name is required");
    }
    if(!email){
        errors.push("Email is required");
    }
    if(!password || password.length < 6) {
        errors.push("Password is required and at least 6 characters long");
    }

    if(errors.length > 0) {
        throw errors;
    }
}

/**
 *
 * @param {CreateUserDto} user
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

export default {
    validateOrThrow
}