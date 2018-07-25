//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('unable to connect with mongodb',err);
    }
    console.log('connected with mongodb');
    db.collection('todos').insertOne({text:'some task to do', completed:false},(err,result)=>{
        if(err)
        {
            return console.log('error in inserting to collection',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));

    });
    db.collection('users').insertOne({name:'manu', age:36,location:'india'},(err,result)=>{
        if(err)
        {
            return console.log('error in inserting to collection',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
        console.log(result.ops[0]._id.getTimestamp());

    });

  db.close();
})