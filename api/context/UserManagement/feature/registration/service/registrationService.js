import * as User from "../domain/User.js";

// Application Service Layer
export const register = async (req, res) => {
    const user = await User.create(req.body);
    return user;
}

export default {
    register
};