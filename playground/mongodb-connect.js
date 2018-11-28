// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

//ES6 destructuring
// var user = {name:'Chitresh',age:25 };
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        console.log('Unable to connect to mongoDB server')
    }
    console.log('connected to mongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    // text:'something to do',
    // completed:false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert to do',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2))
    // });

    db.collection('Users').insertOne({
        name:'Chitresh Sharma',
        age:25,
        location:'Banglore'
        },(err,result)=>{
            if(err){
                return console.log('Unable to insert to do',err);
            }
            // console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
            console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2))
        });
    client.close();
});
