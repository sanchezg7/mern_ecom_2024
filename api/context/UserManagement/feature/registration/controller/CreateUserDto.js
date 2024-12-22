/**
 * @typedef CreateUserDto
 * @property {String} name
 * @property {String} email
 * @property {String} password
 */

function CreateUserDto(dto) {
    Object.assign(this, {...dto});
    return this;
}

export default CreateUserDto;