const Mongoose = require('mongoose');

var Todo =Mongoose.model('Todo',{
    text:{
        type : String,
        required: true,
        trim: true,
        minlength:1
    },
    completed :{
       type : Boolean,
       default: false
    },
    completedAt : {
        type : Number,
        default: null
    }

});

module.exports={ Todo };
