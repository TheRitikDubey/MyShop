const express = require('express');
const dbConnect = require('./config/dataBase');
const app = express();
const userRoutes = require("./Routes/userRoutes");
require ("dotenv").config();
const PORT = process.env.PORT || 8080;
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.listen(PORT,() => {
    console.log(`App is working on port ${PORT}`);
})
app.use("api/v1", userRoutes);
dbConnect();
app.get('/', (req, res) => {
    res.send(`<h1>wokring on port ${PORT}</h1>`)
})