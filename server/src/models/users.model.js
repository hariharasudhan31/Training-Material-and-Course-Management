const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        required: true,
        unique: [true, 'user with email already exists'],
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const UsersModel = mongoose.model('users', usersSchema);
module.exports = UsersModel;