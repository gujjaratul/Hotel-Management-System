const mongoose = require('mongoose');
var Schema = mongoose.Schema;


const ManagerSchema = new Schema({
    roomtype : String,
    price : String,
    dayprice: String,
    status : String

})
module.exports = mongoose.model('manager',ManagerSchema);