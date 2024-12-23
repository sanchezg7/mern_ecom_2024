import UserRepo from "../../../repository/user.js";

/**
 *
 * @param {RegisterUserCommand} command
 * @returns {User}
 */
async function registerUser(command) {
    return await new UserRepo({...command}).save();
}

export default {
 registerUser,
};