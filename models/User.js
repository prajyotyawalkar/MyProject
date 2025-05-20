const { profile } = require('console');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: {type: String, unique: true},
    password: String,
    profile:{
        age: Number,
        bio: String
    }
});

module.exports = mongoose.model('User', userSchema);