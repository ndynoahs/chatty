const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log(`MongoDB Connected:`.cyan.underline);
    } catch (error){
        console.log(`Error: ${error.message}`.red.bold);
        // process.exist();
    }
}

module.exports = connectDB;

