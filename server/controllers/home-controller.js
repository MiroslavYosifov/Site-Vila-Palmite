const models = require('../models/index');

function index (req, res, next) {
    const user = req.user;
    models.galleryImagesModel.find({ roles: { $in: ["HomePage"] } }).then(imagesBackground => {
        models.galleryImagesModel.find().then(convertedImages => {
            let convertedImagesBackground = imagesBackground.map((val) => {
                val.photoBufferData = val.photoBufferData.toString('base64');
                return val; 
            });
            let convertedImageBackground = convertedImagesBackground[0];
            res.render('home/index.hbs', { convertedImageBackground, convertedImages });
        }).catch(err => {
            console.log(err);
        });
        
    }).catch(err => {
        console.log(err);
    });
}

function about (req, res, next) {
    const user = req.user;
    models.galleryImagesModel.find({ roles: { $in: ["AboutPage"] } }).then(imagesBackground => {
        models.galleryImagesModel.find().then(convertedImages => {
            let convertedImagesBackground = imagesBackground.map((val) => {
                val.photoBufferData = val.photoBufferData.toString('base64');
                return val; 
            });
            let convertedImageBackground = convertedImagesBackground[0];
            res.render('home/about.hbs', { convertedImageBackground, convertedImages });
        }).catch(err => {
            console.log(err);
        });
        
    }).catch(err => {
        console.log(err);
    });
}


function contacts (req, res, next) {
    const user = req.user;
    res.render('home/contacts.hbs');
}


function price (req, res, next) {
    const user = req.user;
    models.galleryImagesModel.find({ roles: { $in: ["PricePage"] } }).then(imagesBackground => {
        models.galleryImagesModel.find().then(convertedImages => {
            let convertedImagesBackground = imagesBackground.map((val) => {
                val.photoBufferData = val.photoBufferData.toString('base64');
                return val; 
            });
            let convertedImageBackground = convertedImagesBackground[0];
            res.render('home/price.hbs', { convertedImageBackground, convertedImages });
        }).catch(err => {
            console.log(err);
        });
        
    }).catch(err => {
        console.log(err);
    });
}




module.exports = {
    index,
    about,
    contacts,
    price,
}