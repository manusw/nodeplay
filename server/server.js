var express = require('express');
var bodyParser = require('body-parser');

var {Mongoose} = require('./db/mongoose.js') ;
var {Todo} = require('./model/Todo.js');
var {Users} = require('./model/User.js');

var app = express();

app.use(bodyParser.json());
// create a to do end point 
app.post('/todos',(req , res)=>{
  //  console.log(req.body.text);
  var newTodo =new Todo({text:req.body.text});
    newTodo.save().then((doc)=>{
        console.log('save todo',doc);
        res.status(200).send(doc);
    },(error)=>{
        console.log('failed to save the todo doc',error);
        res.status(404).send(error);
    });

});


app.listen(3000,(error)=>{
    if(error)
    {
        return console.log('error in binding the port ',error);
    }
    console.log(`listening at port 3000`);
});




// var newuser =new Users({email:'  manusway@gmail.com  '});

// //var newTodo =new Todo({text:'bring cigrate',completed:false,completedAt:123});
// newuser.save().then((doc)=>{console.log('save user',doc)},(error)=>{
//     console.log('failed to save the user doc',error);
// });