const multer = require('multer');

module.exports = {
    storage: multer.diskStorage({
        destination: function(req, file, next) {
            next(null, './public/upload');
        },
        filename: function (req, file, next) {
            //console.log(file);
            const ext = file.mimetype.split('/')[1];
            next(null, file.fieldname + '-' + Date.now() + '.' +ext);
        }  
    }),
    fileFilter: function(req, file, next) {
        if(!file){
            next();
        }
        const image = file.mimetype.startsWith('image/');
        if(image) {
            next(null, true);
        }else {
            next(console.log("Problem with image upload"), false);
        }
    }
};