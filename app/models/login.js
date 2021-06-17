const mongoose = require('mongoose');
var Schema = mongoose.Schema;


const LoginSchema = new Schema({
    email : String,
    password : String
})
module.exports = mongoose.model('login',LoginSchema);