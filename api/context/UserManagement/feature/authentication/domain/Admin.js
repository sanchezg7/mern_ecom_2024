
const ROLE_ADMIN = 1;
/**
 * @param {User} user
 */
export function isAdmin(user){
    return ROLE_ADMIN === user.role;
}