const models = require('../models/index');
const fs = require('fs');

function getGallery (req, res, next) {
    const user = req.user;
    models.galleryImagesModel.find({ roles: { $in: ["GalleryPage"] } }).then(imagesBackground => {
        models.galleryImagesModel.find().then(images => {
            let convertedImagesBackground = imagesBackground.map((val) => {
                val.photoBufferData = val.photoBufferData.toString('base64');
                return val; 
            });
            let convertedImages = images.map((val) => {
                val.photoBufferData = val.photoBufferData.toString('base64');
                return val; 
            });
            let convertedImageBackground = convertedImagesBackground[0];
            res.render('gallery/gallery.hbs', { convertedImageBackground, convertedImages });
        }).catch(err => {
            console.log(err);
        });
        
    }).catch(err => {
        console.log(err);
    });
}

function postUploadImage(req, res) {
    const { title } = req.body;
    if(req.file) {
        // console.log(req.file.filename);
        req.body.photo = req.file.filename;
    }

    if (!req.file) {
        res.redirect('/gallery');
        return;
    }
    
    const photoBufferData = fs.readFileSync(`./public/upload/${req.file.filename}`);
    const contentType = req.file.mimetype;

    models.galleryImagesModel.create({ title, photoBufferData: photoBufferData, contentType }).then(image => {
        res.redirect('/gallery');
    }).catch(err => {
        console.log(err);
    });
}

function deleteImage (req, res) {
    const imageId = req.params.id;
    models.galleryImagesModel.deleteOne({ _id: imageId }).then(image => {
        res.redirect('/gallery');
    });
}

function postChangeImage (req, res) {
    const currentImageId = req.params.id;
    const newImageId = req.body.selectedImage;
    const role = req.body.selectedPage;

    models.galleryImagesModel.update({ _id: currentImageId }, { $pull: { roles: { $in: role } }}).then(curImage => {
        models.galleryImagesModel.update({ _id: newImageId }, { $addToSet: { roles: role }}).then(newImage => {
            if(role === "HomePage") { res.redirect('/');
            } else if (role === "AboutPage") {
                res.redirect('/about');
            } else if (role === "GalleryPage") {
                res.redirect('/gallery');
            } else if (role === "PricePage") {
                res.redirect('/price');
            } 
        }).catch(err => {
            console.log(err);
        });
    }).catch(err => {
        console.log(err);
    })
}

module.exports = {
    getGallery,
    postUploadImage,
    deleteImage,
    postChangeImage,
}