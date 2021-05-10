const express = require('express');
const router = express.Router();

const Education = require('../models/Education');
const JobExperience = require('../models/JobExperience');
const Skill = require('../models/Skill');
const Summary = require('../models/Summary');
const OtherField = require('../models/OtherField');

// @Route   GET api/content/education/
// @desc    Get all educations
// @access  Public
router.get('/', async(req, res) => {
    try {
        const allData = {};
        const education = await Education.find();
        const jobExperience = await JobExperience.find();
        const skills = await Skill.find();
        const summary = await Summary.find();
        const otherFields = await OtherField.find();


        allData.education = education.map(val=>val.toJSON())
        allData.jobExperience = jobExperience.map(val=>val.toJSON())
        allData.skills = skills.map(val=>val.toJSON())
        allData.summary = summary[0].toJSON();
        allData.otherFields = otherFields.map(val=>val.toJSON())
        return res.json(allData);
    } catch (err) {
        return res.status(401).json({msg:"Could not fetch data"})
    }
});


// Export the routes of person
module.exports = router;
