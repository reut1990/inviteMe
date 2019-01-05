
const MongoClient = require('mongodb').MongoClient;


const url = 'mongodb://templati:templati1990@ds117834.mlab.com:17834/templati'


const dbName = 'templati';

var dbConnection = null;

function connectToDb() {
    if (dbConnection) return Promise.resolve(dbConnection);

    return new Promise((resolve, reject)=>{
        MongoClient.connect(url, (err, client) => {
            if (err) return reject('Cannot connect to Mongo');
            console.log("Connected successfully to server");
            dbConnection = client.db(dbName);
            resolve(dbConnection)
        });

    });
}


module.exports = {
    connectToDb
}