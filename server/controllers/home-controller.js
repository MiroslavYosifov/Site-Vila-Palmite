const models = require('../models/index');

function index (req, res, next) {
    const user = req.user;

    models.galleryImagesModel.find({ roles: { $in: ["HomePage"] } }).then(imagesBackground => {
        let imageBackground = imagesBackground[0];
        res.render('home/index.hbs', { imageBackground });
    }).catch(err => {
        console.log(err);
    });
}

function about (req, res, next) {
    const user = req.user;
    models.galleryImagesModel.find({ roles: { $in: ["AboutPage"] } }).then(imagesBackground => {
        let imageBackground = imagesBackground[0];
        res.render('home/about.hbs', { imageBackground });
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
        let imageBackground = imagesBackground[0];
        res.render('home/price.hbs', { imageBackground });
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