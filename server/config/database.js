const mongoose = require('mongoose');

exports.connect = () => {    
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then( () => {
        console.log("DB connected successfully...")
    })
    .catch( (error) => {
        console.log("issue in db connection");
        console.log("DB connection error: ", error);
        process.exit(1);
    })
};
