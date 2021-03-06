const { Schema, model } = require('mongoose');

const userRoleEnum = require('../config/user-role-enum');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    role: {
        type: String,
        default: userRoleEnum.USER
    }
}, { timestamps: true });

module.exports = model('user', userSchema);
