var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    job :String,
    salary : String,
    address : String
});

module.exports = mongoose.model('User', UserSchema);

