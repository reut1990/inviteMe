const mongoService = require('./mongoService')
const ObjectId = require('mongodb').ObjectId;

const COLLECTION_NAME = 'user';

module.exports = {
    query,
    getById,
    remove,
    addUser,
    update,
    checkLogin

}
function query() {
    return mongoService.connectToDb()
        .then(dbConn => {
           const collection = dbConn.collection(COLLECTION_NAME);
           return collection.find().toArray();
        })
        .catch (err =>{
            console.log ('err: ', err);
        })

}

function getById(userId) {
    var userId = new ObjectId(userId)
    return mongoService.connectToDb()
        .then(dbConn => {
            const userCollection = dbConn.collection(COLLECTION_NAME);
            return userCollection.findOne({ _id: userId })
        })

}


function remove(userId) {
    userId = new ObjectId(userId)
    return mongoService.connectToDb()
        .then(dbConn => {
            const userCollection = dbConn.collection(COLLECTION_NAME);
            return userCollection.remove({ _id: userId })
        })
}


function addUser(user) {
    user.modified = new Date(user.modified)
    return mongoService.connectToDb()
        .then(dbConn => {
            const collection = dbConn.collection(COLLECTION_NAME);
            return collection.insertOne(user)
                .then(result => {
                    user._id = result.insertedId;
                    return user;
                })
        })
}


function update(user) {
    const userId = new ObjectId(user.id)
    return mongoService.connectToDb()
        .then(dbConn => {
            const userCollection = dbConn.collection(COLLECTION_NAME);
            return userCollection.updateOne({ _id: userId }, { $set: user })
                .then(result => {
                    return user;
                });

        })
}


function checkLogin({ nickname, password }) {
    return mongoService.connectToDb()
        .then(dbConn => dbConn.collection(COLLECTION_NAME).findOne({ nickname }))
        .then(user => {
            if (user.password === password) return user;
            throw new Error('The Password does not match');
        })
}








