const Mongoose = require('mongoose');


// create a user model 
var Users =Mongoose.model('Users',{
    email:{
        type : String,
        required: true,
        trim: true,
        minlength:1
    }


});

module.exports={ Users };
