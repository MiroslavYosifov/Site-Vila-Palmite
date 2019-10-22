const passport = require('passport');
const LocalPassport = require('passport-local');
const User = require('mongoose').model('User');

module.exports = () => {
    passport.use(new LocalPassport((username, password, next) => {
        User.findOne({ username: username }).then(user => {
            if(!user) return next(null, false);
            if(!user.authenticate(password)) return(null, false)
            return next(null, user)
        })
    }))

    passport.serializeUser((user, next) => {
        if (user) return next(null, user._id);
    })

    passport.deserializeUser((id, next) => {
        User.findById(id).then(user => {
            if(!user) return next(null, false)
            return next(null, user)
        })
    })
}