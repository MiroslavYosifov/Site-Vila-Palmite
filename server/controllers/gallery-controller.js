const models = require('../models/index');
const fs = require('fs');

function getGallery (req, res, next) {
    const user = req.user;
    models.galleryImagesModel.find().then(images => {
        let convertedImages = images.map((val) => {
            val.photoBufferData= val.photoBufferData.toString('base64');
            return val; 
        });
        res.render('gallery/gallery.hbs', { convertedImages });
    }).catch(err => {
        console.log(err);
    })
}

function postUploadImage(req, res) {
    const { title } = req.body;
    if(req.file) {
        // console.log(req.file);
        req.body.photo = req.file.filename;
    }
    
    const photoBufferData = fs.readFileSync(`./public/upload/${req.file.filename}`);
    const contentType = req.file.mimetype;

    models.galleryImagesModel.create({ title, photoBufferData: photoBufferData, contentType }).then(image => {
        res.redirect('/gallery');
    }).catch(err => {
        console.log(err);
    })
}

function deleteImage (req, res) {
    const imageId = req.params.id;
    
    models.galleryImagesModel.deleteOne({ _id: imageId }).then(image => {
        res.redirect('/gallery');
    })
}

module.exports = {
    getGallery,
    postUploadImage,
    deleteImage
}