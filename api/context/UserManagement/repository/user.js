import mongoose from "mongoose";
const { Schema } = mongoose;

/**
 * @typedef User
 * @property {String} name
 * @property {String} email
 * @property {String} password
 * @property {String} address
 * @property {Number} role
 */

const userSchema = new Schema({
    name: {
        type: String,
        trim: true, // whitespace
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 64
    },
    address: {
        type: String,
        trim: true
    },
    role: {
        type: Number,
        default: 0 // admin will be 1
    }
}, { timestamps: true});

export default mongoose.model("User", userSchema);