var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var reservationSchema = new Schema({
    name : String,
    child : String,
    adult : String,
    date : String,
    night : String
});

module.exports = mongoose.model('Reservation',reservationSchema);