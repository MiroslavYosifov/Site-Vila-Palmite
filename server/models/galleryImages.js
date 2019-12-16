const mongoose = require('mongoose');

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required';

const galleryImagesSchema = new mongoose.Schema({
    title: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
    imageUrl: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
    description: { type: String},
    roles: [String]
});

module.exports = mongoose.model('galleryImages', galleryImagesSchema);