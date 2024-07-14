const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL

exports.connect = () => {    
    mongoose.connect(MONGODB_URL)
    .then( () => {
        console.log("DB connected successfully...")
    })
    .catch( (error) => {
        console.log("issue in db connection");
        console.log("DB connection error: ", error);
        process.exit(1);
    })
};
