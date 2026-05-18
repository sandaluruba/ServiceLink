const mongoose = require('mongoose');
const JobRequest = require('./model/JobRequest.model');
require('dotenv').config();

const sampleJobs = [
    {
        title: "Fix Leaking Kitchen Tap",
        description: "The kitchen tap has been dripping for a week. Need a plumber to fix it.",
        category: "Plumbing",
        location: "Colombo 03",
        contactName: "Kamal Perera",
        contactEmail: "kamal@example.com",
        status: "Open"
    },
    {
        title: "Repaint Living Room Walls",
        description: "Need a painter to repaint 3 walls in the living room. Color already chosen.",
        category: "Painting",
        location: "Nugegoda",
        contactName: "Nimasha Silva",
        contactEmail: "nimasha@example.com",
        status: "Open"
    },
    {
        title: "Repair Ceiling Fan",
        description: "Ceiling fan is making noise and slowing down. Needs electrical inspection.",
        category: "Electrical",
        location: "Kandy",
        contactName: "Roshan Fernando",
        contactEmail: "roshan@example.com",
        status: "In Progress"
    },
    {
        title: "Garden Cleanup After Monsoon",
        description: "Lots of fallen branches and overgrown grass after the rain. Need help.",
        category: "Gardening",
        location: "Gampaha",
        contactName: "Dilani Wijesinghe",
        contactEmail: "dilani@example.com",
        status: "Open"
    },
    {
        title: "Install CCTV Camera at Home",
        description: "Need a technician to install 2 outdoor CCTV cameras and set up recording.",
        category: "Security",
        location: "Colombo 07",
        contactName: "Hasitha Bandara",
        contactEmail: "hasitha@example.com",
        status: "Open"
    },
    {
        title: "Fix Broken Tiles in Bathroom",
        description: "3 floor tiles are cracked and need replacing. Tiles are already available.",
        category: "Tiling",
        location: "Moratuwa",
        contactName: "Thilini Rajapaksa",
        contactEmail: "thilini@example.com",
        status: "Closed"
    },
    {
        title: "Deep Clean Entire House",
        description: "Moving to a new house. Need full deep cleaning before moving in.",
        category: "Cleaning",
        location: "Malabe",
        contactName: "Asanka Jayawardena",
        contactEmail: "asanka@example.com",
        status: "Open"
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");

        // Optional: clear existing jobs first
        await JobRequest.deleteMany({});
        console.log("Cleared existing jobs");

        await JobRequest.insertMany(sampleJobs);
        console.log("Inserted sample jobs successfully!");

        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    } catch (error) {
        console.error("Seed failed:", error);
        process.exit(1);
    }
};

seedDB();
