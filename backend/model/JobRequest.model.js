const mongoose = require('mongoose');

const JobRequestSchema = mongoose.Schema({

    title:{
        type: String,
        required: [true, "Please provide a Title"]
    },

    description:{
        type: String,
        required: [true, "Please provide a Description"]
    },

    category:{
        type: String,
    },

    location:{
        type: String,
    },

    contactName:{
        type: String,
    },

    contactEmail:{
        type: String,
    },

    status:{
        type: String,
        enum: ["Open", "In Progress", "Closed"],
        default: "Open"
    }
},{
    timestamps: true
});

const JobRequest = mongoose.model("JobRequest", JobRequestSchema);
module.exports = JobRequest;