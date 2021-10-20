const mongoose = require('mongoose');


const Movie = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    movie: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Movie', Movie);