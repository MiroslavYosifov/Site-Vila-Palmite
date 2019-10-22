const controllers = require('../controllers/index');
const auth = require('./auth');
//auth.isInRole('Admin')
//auth.isAuthenticated

module.exports = (app) => {
    
    app.post('/logout', controllers.users.logout);
    app.get('/login', controllers.users.getLogin);
    app.post('/login', controllers.users.postLogin);
    app.get('/register', controllers.users.getRegister);
    app.post('/register', controllers.users.postRegister);
    app.get('/about', controllers.home.about);
    app.get('/', controllers.home.index);

    app.all('*', controllers.errors.notFound);
}