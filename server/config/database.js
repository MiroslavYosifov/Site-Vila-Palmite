const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = (settings) => {
    
    mongoose.connect(settings.db);
    let db = mongoose.connection;

    db.once('open', (err) => {
        if(err) {
            throw err;
        }
        console.log('MongoDB Ready');
        User.seedAdminUser();
    });
    db.on('error', err => console.log(`Database error: ${err}`));
}