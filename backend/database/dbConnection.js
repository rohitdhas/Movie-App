const mongoose = require("mongoose");

module.exports = async function DbConnection() {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(process.env.DB, connectionParams);
        console.log("DB Connected!");
    } catch (error) {
        console.log(error);
        console.log("Could not connect to database!");
    }
};
