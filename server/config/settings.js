const path = require('path');
const port = process.env.PORT || 1337;

//const CONNECTION_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/database';
const CONNECTION_URL = 'mongodb://miro:123456abc@sitecluster-shard-00-00-eis0r.mongodb.net:27017,sitecluster-shard-00-01-eis0r.mongodb.net:27017,sitecluster-shard-00-02-eis0r.mongodb.net:27017/test?ssl=true&replicaSet=siteCluster-shard-0&authSource=admin&retryWrites=true&w=majority';
//const CLOUDINARY_URL = 'cloudinary://956774696274642:60ODZzAY0pXN1bVZeTro3E78ps4@da8bqxsjv';

let roothPath = path.normalize(path.resolve(__dirname, '/../../'));

module.exports = {
    development: {
        rootPath: roothPath,
        db: 'mongodb://localhost:27017/database',
        port: port
    },
    production: {
        rootPath: roothPath,
        db: CONNECTION_URL,
        port: port
    },
    staging: {
    },
}