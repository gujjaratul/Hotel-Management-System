var express = require('express');
var app = express();
const jwt = require('jsonwebtoken');
var port = process.env.PORT || 3000;
var morgan = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
var User = require('./app/models/user');
var Details = require('./app/models/recep');
var Login = require('./app/models/login');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');


app.use(cors());

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/api',appRoutes);


mongoose.connect('mongodb://localhost:27017/tutorial', { useNewUrlParser: true ,useUnifiedTopology: true },(err)=>{
if(err){
    console.log('Some error occured');
}else{
console.log('Connected to database');
}
});


app.get('*',(req,res) =>{
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
})




app.listen(port,()=>{
    console.log('Running Server on :'+port);
})


 