import UserRepo from "./repository/user.js";

export class User {
    constructor() {}
}

export async function create(data) {
    const user = await new UserRepo(data).save();
    return user;
}