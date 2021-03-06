const mongoose = require('mongoose');
const encryption = require('../utilities/encryption');

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required';

const userSchema = new mongoose.Schema({
    username: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
    salt: { type: String },
    hashedPass: { type: String },
    roles: [String]
});

userSchema.method({
    authenticate: function (password) {
        return encryption.generateHashedPassword(this.salt, password) === this.hashedPass;
    }
})

let User =  mongoose.model('User', userSchema);

module.exports = mongoose.model('User', userSchema);
module.exports.seedAdminUser = () => {
    User.find({}).then(users => {
        if(users.length > 0) return
        let salt = encryption.generateSalt();
        let hashedPass = encryption.generateHashedPassword(salt, '123456');

        User.create({
            username: 'Kristin',
            salt: salt,
            hashedPass: hashedPass,
            roles: ['Admin']
        });
    })
}
  