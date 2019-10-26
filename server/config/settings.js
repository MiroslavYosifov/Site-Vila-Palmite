const path = require('path');
const port = process.env.PORT || 1337;
const CONNECTION_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/database';
let roothPath = path.normalize(path.resolve(__dirname, '/../../'));

module.exports = {
    development: {
        rootPath: roothPath,
        db: CONNECTION_URL,
        port: port
    },
    staging: {
    },
    production: {
        rootPath: roothPath,
        db: CONNECTION_URL,
        port: port
    }
}