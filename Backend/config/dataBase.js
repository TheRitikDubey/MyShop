const mongoose = require('mongoose');
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlparser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("DB connection successfully");
    })
    .catch((err) => {
        console.log("error while connecting: ",err.message);
        process.exit(1);
    })
}
module.exports = dbConnect;