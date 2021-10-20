const express = require("express");
const router = express.Router();
const { getAllMovies, getOneMovie } = require('../controller/movieController');

// Get all movies
router.get('/get-all', getAllMovies)

// Get one Movie
router.get('/', getOneMovie)

module.exports = router;