// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        console.log('Unable to connect to mongoDB server')
    }
    console.log('connected to mongoDB server');
    const db = client.db('TodoApp');
    //delete Many
    // db.collection('Todos').deleteMany({text : 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
        console.log(result);
    });

    // client.close();
});
