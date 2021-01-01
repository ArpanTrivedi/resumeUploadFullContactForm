const router = require('express').Router();
const {resumeGet, resumePost} = require('../controller/resume');

//get route
router.get('/allApplicant', resumeGet);

//post route
router.post('/upload', resumePost);

module.exports = router