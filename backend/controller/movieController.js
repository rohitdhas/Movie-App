const Movie = require('../database/schema/movieSchema');

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).json({ data: movies })
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
}

const getOneMovie = async (req, res) => {
    try {
        const id = req.query.id;
        const movie = await Movie.findById(id);

        if (movie === null) {
            return res.status(404).json({ msg: "Not Found!" })
        } else {
            res.status(200).json({ data: movie })
        }
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
}

module.exports = { getAllMovies, getOneMovie }