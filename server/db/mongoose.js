const Mongoose = require('mongoose');
Mongoose.Promise = global.Promise ;

Mongoose.connect('mongodb://localhost:27017/TodoApp').then((res)=>{console.log('connected with mongodb')},(error)=>{
    console.log('unable to connect to server',error)
});

module.exports = {Mongoose};