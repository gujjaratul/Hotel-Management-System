var User = require('../models/user');
var Details = require('../models/recep');
var Login = require('../models/login');
var Manager = require('../models/manager');
var Reservation = require('../models/reservation');
const jwt = require('jsonwebtoken')
const { isValidObjectId } = require('mongoose');


module.exports = (router)=> {

    //for owner
    // To add The staff of the hotel
router.post('/users',(req,res,next) =>{
    var user = new User();
    user.username = req.body.username;
    user.job = req.body.job;
    user.salary = req.body.salary;
    user.address = req.body.address;
    user.save();
    res.send('user created');
 })
// To get the staff of the hotel
 router.get('/find', (req,res) =>{
     User.find(function(err,contacts){
         res.status(200).json({ used : contacts});
     })
 })
// To delete the Staff of the Hotel
router.delete('/erase/:id', (req,res) =>{
if(!isValidObjectId(req.params.id))
return res.status(400).send('No record found by this id : ${req.params.id}');

User.findByIdAndDelete(req.params.id, (err , dat) =>{
if(!err){ res.send(dat);}
else {console.log('Error in User delete' +JSON.stringify(err,undefined,2)); }
})
})
//
router.put('/udate', (req , res , next) =>{
User.findById(req.body._id , (err,userdet) =>{
    if(err)
    res.status(500).json({errmsg:err});
    userdet.username = req.body.username;
    userdet.job = req.body.job;
    userdet.salary = req.body.salary;
    userdet.address = req.body.address;
    userdet.save((err, userdet) =>{
        if(err)
        res.status(500).json({ errmsg : err});

        res.status(200).json({ used : userdet });
    })
})
}) 




// for Receptionist
// to add the cutomer
router.post('/recep', (req,res) =>{
  
    var user = new Details();
    user.name = req.body.name;
    user.phone = req.body.phone;
    user.adhar = req.body.adhar;
    user.save();
    res.send('Customer Created');
})
// To get all the data 
router.get('/getdet' ,(req,res,next) =>{
   // res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    Details.find({},(err , det) =>{
       if(err)
       res.status(500).json({ errmsg : err});
       res.status(200).json({ msg : det});
    });
});




// to delete the customer using its id
 router.delete('/delete/:id' , (req,res) => {
     if(!isValidObjectId(req.params.id))
     return res.status(400).send('No record found by this id : ${req.params.id}' );

     Details.findByIdAndDelete(req.params.id, (err, det) =>{
         if(!err) { res.send(det); }
         else { console.log('Error in Customer delete' + JSON.stringify(err, undefined, 2)); }
     });

 })
// to update the cutomer
 router.put('/update', (req,res,next) =>{
     Details.findById(req.body._id , (err ,details) =>{
         if(err)
         res.status(500).json({errmsg : err});
         details.name = req.body.name;
         details.phone = req.body.phone;
         details.adhar = req.body.adhar;
         details.save((err, details) =>{
             if(err)
             res.status(500).json({ errmsg : err });

                res.status(200).json({ msg : details });
         })
     })
 })

// To register the user 
router.post('/register', (req, res) =>{
    let myuser = new Login()
    myuser.email = req.body.email;
    myuser.password = req.body.password;
     myuser.save(async(error , registeredUser) =>{
        
         if(error){
            
             console.log(error);
         }
         else{
             let payload = { subject: registeredUser._id }
             let token = jwt.sign(payload  , 'secretKey')
            res.status(200).send({token})
            
         }
        
     });
    //res.send('USer Created');
})

// To LOgin
router.post('/login' , (req,res) =>{
    let myuser = req.body
    Login.findOne({email: myuser.email} , async(error, user) =>{
        if(error){
            console.log(error)
        }
        else{
            if(!user){
                res.status(401).send('Invalid Email')
            }
            else
            if( user.password !== myuser.password){
                res.status(401).send('Invalid Password')
            }
            else{
                let payload = { subject:user._id }
                let token = jwt.sign(payload , 'secretKey')
                res.status(200).send({token})
            }
        }
    })

})

// for Manager
// to add inventory

router.post('/addin', (req,res) =>{
  
    var user = new Manager();
    user.roomtype = req.body.roomtype;
    user.price = req.body.price;
    user.dayprice = req.body.dayprice;
    user.status = req.body.status
    user.save();
    res.send('Inventory Created');
})
//to see inventory
router.get('/getin' ,(req,res,next) =>{
    // res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     Manager.find({},(err , detin) =>{
        if(err)
        res.status(500).json({ errmsg : err});
        res.status(200).json({ msg : detin});
     });
 });

// to update inventory
 router.put('/updatein', (req , res , next) =>{
    Manager.findById(req.body._id , (err,indet) =>{
        if(err)
        res.status(500).json({errmsg:err});
        indet.roomtype = req.body.roomtype;
        indet.price = req.body.price;
        indet.dayprice = req.body.dayprice;
        indet.status = req.body.status;
        indet.save((err, indet) =>{
            if(err)
            res.status(500).json({ errmsg : err});
    
            res.status(200).json({ used : indet });
        })
    })
    }) 

// to delete inventory
router.delete('/deletein/:id' , (req,res) => {
    if(!isValidObjectId(req.params._id))
    return res.status(400).send('No record found by this id : ${req.params.id}' );

    Manager.findByIdAndDelete(req.params.id, (err, detin) =>{
        if(!err) { res.send(detin); }
        else { console.log('Error in Customer delete' + JSON.stringify(err, undefined, 2)); }
    });

})




// For Reservation This is hold by Receptionist
//To add reservation of guest
router.post('/reservein', (req,res) =>{
  
    var user = new Reservation();
    user.name = req.body.name;
    user.child = req.body.child;
    user.adult = req.body.adult;
    user.date = req.body.date;
    user.night = req.body.night
    user.save();
    res.send('Reservation Created');
})
// to get all the reservations
router.get('/reserveget' ,(req,res,next) =>{
    // res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     Reservation.find({},(err , detin) =>{
        if(err)
        res.status(500).json({ errmsg : err});
        res.status(200).json({ msg : detin});
     });
 });
 router.delete('/reservedet/:id' , (req,res) => {
    if(!isValidObjectId(req.params._id))
    return res.status(400).send('No record found by this id : ${req.params.id}' );

    Reservation.findByIdAndDelete(req.params.id, (err, detin) =>{
        if(!err) { res.send(detin); }
        else { console.log('Error in Customer delete' + JSON.stringify(err, undefined, 2)); }
    });

})

router

return router;

}