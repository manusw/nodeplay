//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('unable to connect with mongodb',err);
    }
    console.log('connected with mongodb');

    // db.collection('users').find({_id:ObjectID('5b590202703c9624d0984a8e')}).toArray().then((docs)=>{
    //     console.log('users');
    //     console.log(JSON.stringify(docs,undefined,2));

    // },(err)=>{console.log('unable to fetch the users',err)});
    db.collection('users').find({name: 'satyam'}).toArray().then((docs)=>{
        console.log('users');
        console.log(JSON.stringify(docs,undefined,2));

    },(err)=>{console.log('unable to fetch the users',err)});

//     db.collection('todos').insertOne({text:'some task to do', completed:false},(err,result)=>{
//         if(err)
//         {
//             return console.log('error in inserting to collection',err);
//         }
//         console.log(JSON.stringify(result.ops,undefined,2));

//     });
//     db.collection('users').insertOne({name:'manu', age:36,location:'india'},(err,result)=>{
//         if(err)
//         {
//             return console.log('error in inserting to collection',err);
//         }
//         console.log(JSON.stringify(result.ops,undefined,2));
//         console.log(result.ops[0]._id.getTimestamp());

//     });

//   db.close();
})