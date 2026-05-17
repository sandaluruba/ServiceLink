const express = require('express');
const router = express.Router();
const { getAllJobRequest, getJobRequest, createJobRequest, updatejobRequest, deleteJobRequest } = require('../controller/jobRequest.controller.js');



router.get('/', getAllJobRequest);
router.get('/:id', getJobRequest);
router.post('/', createJobRequest);
router.patch('/:id', updatejobRequest);
router.delete('/:id', deleteJobRequest);




module.exports = router;