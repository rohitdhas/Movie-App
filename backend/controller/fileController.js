const Movie = require('../database/schema/movieSchema');
const mongoose = require('mongoose')
const Grid = require("gridfs-stream");

// GFS Connnection
let gfs;
const conn = mongoose.connection;
conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("media");
});


const uploadMovie = async (req, res) => {
    const thumbnail = req.files.thumbnail[0].filename;
    const movie = req.files.movie[0].filename;
    // Storing Movie Data to DB
    try {
        req.body.movie = movie;
        req.body.thumbnail = thumbnail;
        let newMovie = new Movie(req.body);
        await newMovie.save();

        res.status(200).json({ msg: "Upload Finished!", data: req.body, success: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err.message })
    }
}

const readFileData = async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    } catch (error) {
        res.status(404).json({ msg: "Not Found!" });
    }
}

const deleteMovie = async (req, res) => {
    try {
        const filename = req.params.filename;
        await gfs.files.deleteOne({ filename });
        await Movie.findOneAndDelete({ movie: filename })
        res.status(200).json({ success: true, msg: "Movie Deleted!" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ err: error.message });
    }
}

module.exports = { uploadMovie, deleteMovie, readFileData };