const models = require('../models/index');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

function getGallery (req, res, next) {
    const user = req.user;
    models.galleryImagesModel.find({ roles: { $in: ["GalleryPage"] } }).then( imagesBackground => {
        let imageBackground = imagesBackground[0];
        models.galleryImagesModel.find().then(images => {
            res.render('gallery/gallery.hbs', { imageBackground, images });
        }).catch(err => {
            console.log(err);
        });
    }).catch(err => {
        console.log(err);
    });
}

function postUploadImage(req, res) {
    const title = req.body.title;
    console.log(req.file.size);
    
    if (!req.file || req.file.size > 8000000) { res.redirect('/gallery'); return; }

    if(req.file) {
        const imagePath = req.file.path;

        cloudinary.uploader.upload(imagePath, function(error, resImage) {
            if(error) { console.log('ERROR:::', error) }
            const resImageUrl = resImage.url;
            const cloudinaryImageId = resImage.public_id;
            console.log(cloudinaryImageId);
            console.log('RESIMAGEUPLOAD: ',resImage);
            
            models.galleryImagesModel.create({ title, imageUrl: resImageUrl, cloudinaryImageId }).then(image => {
                res.redirect('/gallery');
            }).catch(err => {
                console.log(err);
            });

        });
    }
}

function deleteImage (req, res) {
    const imageId = req.params.id;
    models.galleryImagesModel.findOneAndDelete({ _id: imageId }).then(deletedImage => {
        console.log('DELETEDIMAGE: ',deletedImage);
        cloudinary.uploader.destroy(deletedImage.cloudinaryImageId, function(error, resImage) {
            console.log('resDELETEDIMAGFE: ', resImage);
            res.redirect('/gallery');
        });
    });
}

function postChangeImage (req, res) {
    const currentImageId = req.params.id;
    const newImageId = req.body.selectedImage;
    const role = req.body.selectedPage;

    models.galleryImagesModel.updateMany({}, { $pull: { roles: { $in: role } }}).then(curImage => {
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