import UserRepo from "../../../repository/user.js";

/**
 *
 * @param {FindUserByEmailQuery} query
 * @returns {User} user
 */
async function findUserByEmail(query) {
    return UserRepo.findOne({email: query.email}).exec();
}

/**
 *
 * @param {FindUserByIdQuery} query
 * @returns {User} user
 */
async function findUserById(query) {
    return UserRepo.findById(query.getId());
}

export default {
    findUserByEmail,
    findUserById
}