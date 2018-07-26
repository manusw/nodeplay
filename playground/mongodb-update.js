//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('unable to connect with mongodb',err);
    }
    console.log('connected with mongodb');

// incriment  many
db.collection('users').findOneAndUpdate({_id:ObjectID('5b58fd9ca04dae6710d33f89')},{$inc : {age:-5}},{returnOriginal:false}).then((result)=>{
    console.log(result)
},(err)=>{console.log('error in findoneandupdate',err)});
// // findoneandupdate
db.collection('todos').findOneAndUpdate({_id: ObjectID('5b590202703c9624d0984a8d')},{$set: {completed: false}},{returnOriginal:false}).then((result)=>{
    console.log(result)
},(err)=>{console.log('error in findoneandupdate',err)});
 // db.close();
})