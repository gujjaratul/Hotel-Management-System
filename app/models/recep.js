var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var recepSchema = new Schema({
name :String,
phone : String,
adhar: String
});

module.exports = mongoose.model('Details',recepSchema);