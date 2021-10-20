const express = require("express");
const router = express.Router();
const { getAllMovies, getOneMovie, quickSearch } = require('../controller/movieController');

// Get all movies
router.get('/get-all', getAllMovies)

// Get one Movie
router.get('/', getOneMovie);

// Search Autocomplete
router.get('/search', quickSearch);

module.exports = router;