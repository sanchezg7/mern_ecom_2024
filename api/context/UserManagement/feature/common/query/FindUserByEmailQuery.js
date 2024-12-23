/**
 * Queries should have primitive types for parameters to delineate what it expects
 * The exception is if complex types are needed for a type, but it could be a sign your request is complex/bulky
 * @param {String} email
 * @constructor
 */
function FindUserByEmailQuery(email) {
    this.email = email;
    return this;
}

export default FindUserByEmailQuery;