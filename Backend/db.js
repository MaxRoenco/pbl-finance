const { MongoClient } = require('mongodb')

let dbConnection;
let uri = 'mongodb+srv://admin:admin@cluster0.s6jds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
        .then((client) => {
            dbConnection = client.db();
            return cb();
        })
        .catch(err => {
            console.log(err);
            return cb(err);
        })
    },
    getDb: () => dbConnection
}