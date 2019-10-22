const models = require('../models/index');
const encryption = require('../utilities/encryption');
const User = require('mongoose').model('User');

function getLogin (req, res) {
    res.render('users/login.hbs');
}

function postLogin (req, res, next) {
    let reqUser = req.body;
    User.findOne({ username: reqUser.username }).then((user) => {

        if(!user) {
            res.locals.globalError = "Invalid user data";
            res.render('users/login.hbs');
            return
        }

        if(!user.authenticate(reqUser.password)) {
            res.locals.globalError = "Invalid user data";
            res.render('users/login.hbs');
            return
        }

        req.logIn(user, (err, user) => {
            if (err) {
                res.locals.globalError = "Invalid user data";
                res.render('users/login.hbs');
                return
            }
            res.redirect('/');
        });
    });
}

function getRegister (req, res) {
    res.render('users/register.hbs');
}

function postRegister (req, res, next) {
    let reqUser = req.body;
    // ADD VALIDATIONS !

    let salt = encryption.generateSalt();
    let hashedPassword = encryption.generateHashedPassword(salt, reqUser.password);

    User.create({
        username: reqUser.username,
        firstName: reqUser.firstName,
        lastName: reqUser.lastName,
        salt: salt,
        hashedPass: hashedPassword
    }).then(user => {
        req.logIn(user, (err, user) => {
            if (err) {
                res.locals.globalError = err;
                res.render('users/register.hbs', user);
            }
            res.redirect('/');
        })
    })
}

function logout(req, res) {
   req.logout();
   res.redirect('/');
}

module.exports = {
    getLogin,
    postLogin,
    getRegister,
    postRegister,
    logout
}