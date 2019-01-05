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
            const collection = dbConn.collection('template');
            return collection.find().toArray();
        })
        .catch(err => {
            console.log('err:', err);
        })
}

function getById(templateId) {
    templateId = new ObjectId(templateId)
    return mongoService.connectToDb()
        .then(dbConn => {
            const templateCollection = dbConn.collection('template');
            return templateCollection.findOne({ _id: templateId })
        })
}

function remove(templateId) {
    templateId = new ObjectId(templateId)
    return mongoService.connectToDb()
        .then(dbConn => {
            const templateCollection = dbConn.collection('template');
            return templateCollection.remove({ _id: templateId })
        })
}

function add(template) {
    template.modified = new Date(template.modified)
    return mongoService.connectToDb()
        .then(dbConn => {
            const collectiom = dbConn.collection('template');
            return collectiom.insertOne(template)
                .then(result => {
                    template._id = result.insertedId;
                    return template;
                })
        })
}

function update(template) {
    const templateId = new ObjectId(template.id)
    return mongoService.connectToDb()
        .then(dbConn => {
            const templateCollection = dbConn.collection('template');
            return templateCollection.updateOne({ _id: templateId }, { $set: template })
                .then(result => {
                    return template;
                });

        })
}



// function add(template) { // before
//     return mongoService.connectToDb()
//         .then(dbConn => {
//             const templateCollection = dbConn.collection('template');          
//             return templateCollection.insertOne(template)
//         })
// }

// function update(template) {//before 
//     const templateId = new ObjectId(template.id)
//     return mongoService.connectToDb()
//         .then(dbConn => {
//             const templateCollection = dbConn.collection('template'); 
//             return templateCollection.findOneAndUpdate({templateName: template.name}, {$set:{templateParts:template}})         

//         })
// }