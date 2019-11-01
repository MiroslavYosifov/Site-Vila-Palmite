const controllers = require('../controllers/index');
const multer = require('multer');
const multerConf = require('./multerConf');
const auth = require('./auth');


//auth.isInRole('Admin')
//auth.isAuthenticated

module.exports = (app) => {
    app.get('/gallery', controllers.gallery.getGallery);
    // app.get('/gallery/upload/image', controllers.gallery.getUploadImage);
    app.post('/gallery/upload/image', multer(multerConf).single('photo'), controllers.gallery.postUploadImage);
    
    app.post('/logout', controllers.users.logout);
    app.get('/login', controllers.users.getLogin);
    app.post('/login', controllers.users.postLogin);
    app.get('/register', controllers.users.getRegister);
    app.post('/register', controllers.users.postRegister);
    
    app.get('/contacts', controllers.home.contacts);
    app.get('/price', controllers.home.price);
    app.get('/about', controllers.home.about);
    app.get('/', controllers.home.index);

    app.all('*', controllers.errors.notFound);
}