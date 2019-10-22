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
        //101rsG4%2A encode
        //db: 'mongodb+srv://myosifov193:101rsG4%2A@datavilapalmite-1xcan.gcp.mongodb.net/test?retryWrites=true&w=majority',
        db: 'mongodb://localhost:27017/database',
        port: port
    }
}