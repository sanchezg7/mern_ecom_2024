import UserRepo from "../../../repository/user.js";

/**
 *
 * @param {FindUserByEmailQuery} query
 * @returns {User} user
 */
async function findUserByEmail(query) {
    return await UserRepo.findOne({email: query.email}).exec();
}

export default {
    findUserByEmail,
}