const mongoose = require('mongoose');

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required';

const galleryImagesSchema = new mongoose.Schema({
    title: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
    photoBufferData: { type: Buffer },
    contentType: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
    description: { type: String},
});

module.exports = mongoose.model('galleryImages', galleryImagesSchema);