require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();

// ______________________ END OF IMPORTS ______________________

// MONGODB CONNECTION

const DB_URI = process.env.MONGO_URI;

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Mongoose Connected!")
})
    .catch(err => console.log(err))


// ______________________ END OF DB CONNECTION ______________________


// Middleweres

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cors({
    origin: 'http://localhost:3000'
}))


// ______________________ END OF MIDDLEWERES ______________________

// Routes

app.get('/', (req, res) => {
    res.send("Hello World!")
})

// ______________________ END OF ROUTES ______________________

app.listen(8080, (err) => {
    if (err) console.log(err)
    else console.log("Server running on PORT 8080!");
})