const path = require('path');
const port = process.env.PORT || 1337;
let roothPath = path.normalize(path.resolve(__dirname, '/../../'));

module.exports = {
    development: {
        rootPath: roothPath,
        db: 'mongodb://localhost:27017/database',
        port: port
    },
    staging: {
    },
    production: {
        rootPath: roothPath,
        db: 'mongodb://localhost:27017/database',
        port: port
    }
}