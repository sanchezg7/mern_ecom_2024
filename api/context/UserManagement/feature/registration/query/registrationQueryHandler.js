import UserRepo from "../../../repository/user.js";

/**
 *
 * @param {FindUserByEmailQuery} query
 */
async function findUserByEmail(query) {
    return await UserRepo.findOne({email: query.email});
}

export default {
    findUserByEmail,
}