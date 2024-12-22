import UserRepo from "../../../repository/user.js";
/**
 *
 * @param {RegisterUserCommand} command
 * @returns {User}
 */
async function registerUser(command) {
    const user = await new UserRepo({...command}).save();
    return user;
}

export default {
 registerUser,
};