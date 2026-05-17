const JobRequest = require('../model/JobRequest.model.js');

const getAllJobRequest = async (req, res) => {

    try{

        const jobRequests = await JobRequest.find();
        res.status(200).json({jobRequests});

    } catch (error){

        res.status(500).json({message: "Failed to Fetch Data", error: error.message});

    }

}

const getJobRequest = async (req, res) => {

    try{

        const {id} = req.params;
        const jobRequest = await JobRequest.findById(id);
        res.status(200).json({jobRequest});

    } catch(error) {

        res.status(500).json({message: "Failed to Fetch Data"});
        
    }

};

const createJobRequest = async (req, res) => {
    try{

        const jobRequest = await JobRequest.create(req.body);
        res.status(200).json({message: "Job Request Added Successfully", jobRequest});

    } catch(error){

        res.status(500).json({message: "Failed to Create Job Request", error: error.message});
    }
};

const updatejobRequest = async (req, res) => {

    try{

        const {id} = req.params;
        const jobRequest = await JobRequest.findByIdAndUpdate(id, req.body);

        if (!jobRequest) {

            return res.status(404).json({message: "Job Request Not Found"});

        }

        const updatedJobRequest = await JobRequest.findById(id);
        res.status(200).json({updatedJobRequest});

    } catch(error) {

        res.status(500).json({message: "Failed to Update"});

    }

};

const deleteJobRequest = async (req, res) => {

    try{

        const {id} = req.params;
        const jobRequest = await JobRequest.findByIdAndDelete(id);

        if(!jobRequest) {

            return res.status(404).json({message: "Job Request Not Found"});
            
        }

        res.status(200).json({message: "Job Deleted Successfully"});

    } catch(error) {

        res.status(500).json({message: "Failed to Delete"});

    }

};


module.exports = {

    getAllJobRequest,
    getJobRequest,
    createJobRequest,
    updatejobRequest,
    deleteJobRequest

}