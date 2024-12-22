import * as User from "../domain/User.js";


/**
 *
 * @param {CreateUserDto} userDto
 * @returns {User}
 */
export const register = async (userDto) => {
    return User.create(userDto);
}

export default {
    register
};