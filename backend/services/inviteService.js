const mongoService = require('./mongoService')
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    getById,
    remove,
    add,
    update
}

function query() {
    return mongoService.connectToDb()
        .then(dbConn => {
            const collection = dbConn.collection('invite');
            return collection.find().toArray();
        })
        .catch(err => {
            console.log('err:', err);
        })
}

function getById(inviteId) {
    inviteId = new ObjectId(inviteId)
    return mongoService.connectToDb()
        .then(dbConn => {
            const inviteCollection = dbConn.collection('invite');
            return inviteCollection.findOne({ _id: inviteId })
        })
}

function remove(inviteId) {
    inviteId = new ObjectId(inviteId)
    return mongoService.connectToDb()
        .then(dbConn => {
            const inviteCollection = dbConn.collection('invite');
            return inviteCollection.remove({ _id: inviteId })
        })
}

function add(invite) {
    invite.modified = new Date(invite.modified)
    return mongoService.connectToDb()
        .then(dbConn => {
            const collectiom = dbConn.collection('invite');
            return collectiom.insertOne(invite)
                .then(result => {
                    invite._id = result.insertedId;
                    return invite;
                })
        })
}

function update(invite) {
    const inviteId = new ObjectId(invite._id)
    delete invite._id
    return mongoService.connectToDb()
        .then(dbConn => {
            const inviteCollection = dbConn.collection('invite');
            return inviteCollection.updateOne({ _id: inviteId }, { $set: invite })
                .then(result => {
                    invite._id = inviteId
                    return invite;
                });

        })
}



// function add(invite) { // before
//     return mongoService.connectToDb()
//         .then(dbConn => {
//             const inviteCollection = dbConn.collection('invite');          
//             return inviteCollection.insertOne(invite)
//         })
// }

// function update(invite) {//before 
//     const inviteId = new ObjectId(invite.id)
//     return mongoService.connectToDb()
//         .then(dbConn => {
//             const inviteCollection = dbConn.collection('invite'); 
//             return inviteCollection.findOneAndUpdate({inviteName: invite.name}, {$set:{inviteParts:invite}})         

//         })
// }