const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName:String,
    lastName: String, 
    userName: String, 
    email: String,
    password: String,
})

const UserModel = mongoose.model('Users', UserSchema)
module.exports = UserModel;