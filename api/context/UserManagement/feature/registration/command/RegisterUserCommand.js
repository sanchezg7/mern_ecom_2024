/**
 * @typedef RegisterUserCommand
 * @property email
 * @property name
 * @property password
 */

/**
 * @constructor
 * @param email
 * @param name
 * @param password
 * @returns RegisterUserCommand
 */
function RegisterUserCommand(email, name, password) {
    Object.assign(this, {email, name, password});
    return this;
}

export default RegisterUserCommand;