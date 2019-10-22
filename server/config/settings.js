const path = require('path');
const port = process.env.PORT || 1337;
let roothPath = path.normalize(path.join(__dirname, '/../../'));

module.exports = {
    development: {
        rootPath: roothPath,
        db: 'mongodb://localhost:27017/blogtemplate',
        port: port
    },
    staging: {
    },
    production: {
        port: port
    }
}