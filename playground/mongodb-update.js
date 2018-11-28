// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        console.log('Unable to connect to mongoDB server')
    }
    console.log('connected to mongoDB server');
    const db = client.db('TodoApp');
    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID('5bfe09e7898478d435f6d326')
    // },{
    //     $set : {
    //         text : 'Eat Dinner'
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('5bfd8cb6e7a29b0a308fa2dc')
    },{
        $set : {
            name : 'Chitresh'
        },
        $inc :{
            age:1
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });

    // client.close();
});
