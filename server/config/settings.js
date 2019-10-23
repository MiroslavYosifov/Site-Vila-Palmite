const path = require('path');
const port = process.env.PORT || 1337;
const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/database';
let roothPath = path.normalize(path.resolve(__dirname, '/../../'));

module.exports = {
    development: {
        rootPath: roothPath,
        db: CONNECTION_URI,
        port: port
    },
    staging: {
    },
    production: {
        rootPath: roothPath,
        db: CONNECTION_URI,
        port: port
    }
}