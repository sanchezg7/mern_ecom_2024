import User from "../common/domain/User.js";

/**
 *
 * @param userWip
 * @returns {Promise<void>}
 */
async function authenticate(userWip) {
    await User.validateOrThrow(userWip);

    const { email, password } = userWip;
}


export default {
    authenticate
}