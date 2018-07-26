//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('unable to connect with mongodb',err);
    }
    console.log('connected with mongodb');

// delete many
    // db.collection('todos').deleteMany({text:'some task to do'}).then((result)=>{
    //     console.log(result)
    // },(err)=>{console.log('error in delete many',err)});
// //delete one 
// db.collection('todos').deleteOne({text:'take bath'}).then((result)=>{
//     console.log(result)
// },(err)=>{console.log('error in deleteone',err)});
// // findoneanddelete
db.collection('todos').findOneAndDelete({completed:true}).then((result)=>{
    console.log(result)
},(err)=>{console.log('error in findoneanddelete',err)});
 // db.close();
})