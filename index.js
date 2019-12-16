let env = process.env.NODE_ENV || 'production';
//let env = process.env.NODE_ENV || 'development';

let settings = require('./server/config/settings')[env];

//const app = require('express')();
const express = require('express');
let app = express();

require('./server/config/cloudinary')();
require('./server/config/database')(settings);
require('./server/config/express')(app);
require('./server/config/routes')(app);
require('./server/config/passport')();
app.listen(settings.port);

console.log(`server listenin ${settings.port}`);
