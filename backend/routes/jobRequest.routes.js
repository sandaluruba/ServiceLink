const express = require('express');
const router = express.Router();
const { getAllJobRequest, getJobRequest, createJobRequest, updatejobRequest, deleteJobRequest } = require('../controller/jobRequest.controller.js');
const protect = require('../middleware/auth.middleware.js');



router.get('/', getAllJobRequest);
router.get('/:id', getJobRequest);
router.post('/', protect, createJobRequest);
router.patch('/:id', updatejobRequest);
router.delete('/:id', protect, deleteJobRequest);




module.exports = router;