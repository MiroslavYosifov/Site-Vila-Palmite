const home = require('./home-controller');
const users = require('./users-controller');
const errors = require('./error-controller');
const gallery = require('./gallery-controller');

module.exports = {
    home,
    users,
    gallery,
    errors
}