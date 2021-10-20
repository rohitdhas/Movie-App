require("dotenv").config();
const DbConnection = require("./database/dbConnection");
const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const app = express();

// ______________________ END OF IMPORTS ______________________

// Middleweres
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}))


// ______________________ END OF MIDDLEWERES ______________________

// Database Connection
DbConnection();

// ______________________ END OF DB CONNECTION ______________________

// Routes
const fileRoutes = require("./routes/fileRoutes");
const movieRoutes = require('./routes/movieRoutes');

app.use("/file", fileRoutes);
app.use("/movie", movieRoutes);

// ______________________ END OF ROUTES ______________________

app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Listening on Port ${PORT}...`);
});
