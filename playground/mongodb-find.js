// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        console.log('Unable to connect to mongoDB server')
    }
    console.log('connected to mongoDB server');
    const db = client.db('TodoApp');
    
    // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));

    // db.collection('Todos').find({_id: new ObjectID('5bfe0299898478d435f6d16c')}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count:${count}`);
       
    // },(err)=>{
    //     console.log('Unable to fetch',err);
    // });

    db.collection('Users').find({name:'Chitresh Sharma'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));       
    },(err)=>{
        console.log('Unable to fetch',err);
    });

    // client.close();
});
