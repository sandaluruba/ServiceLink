require('dotenv').config();
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express');
const mongoose = require('mongoose');
const JobRequest = require("./model/JobRequest.model.js");
const app = express()
const jobRequestRoute = require('./routes/jobRequest.routes.js');

app.use(express.json());

// Import Routes
app.use('/api/jobs', jobRequestRoute);



app.get('/', (req, res) => {
    res.send("Hello Rest API");
});



mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Database Connected Successfully");
        app.listen(5000, () => {
            console.log('Server is running on port 5000');
        });
    })
    .catch((error) => {
        console.log("Database Connection Failed", error.message);
    });