require('dotenv').config();
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const JobRequest = require("./model/JobRequest.model.js");
const app = express()
const jobRequestRoute = require('./routes/jobRequest.routes.js');

const allowedOrigins = [
    'http://localhost:3000',
    'https://service-link-three.vercel.app',
].filter(Boolean);

app.use(cors({
    origin: allowedOrigins,
    optionsSuccessStatus: 200
}));
app.use(express.json());

// Import Routes
app.use('/api/jobs', jobRequestRoute);



app.get('/', (req, res) => {
    res.send("Hello Rest API");
});



mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Database Connected Successfully");
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("Database Connection Failed", error.message);
    });