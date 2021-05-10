const express = require('express');
const router = express.Router();

const Skill = require('../models/Skill');

// @Route   GET api/content/skill/
// @desc    Get all skills
// @access  Public
router.get('/', (req, res) => {
  // Sending html in response with message

  // Query all documents in db
  Skill.find()
    .then(skills => {
      // Returning documents to client
      return res.json(skills.map(skill=>skill.toJSON()));
    })
    .catch(error => {
      // Error handling
      return res.status(500).json(error);
    });
});

router.get('/:id', (req, res) => {
  
    Skill.findOne(
      { _id: { $eq: req.params.id } }, // Find one id equals to id in params
    )
      .then(skill => {
        return res.json(skill);
      })
      .catch(error => {
        return res.status(500).json(error);
      });
  });

// @Route   POST api/content/education/new
// @desc    Creating a new person
// @access  Public
router.post('/new', (req, res) => {
  // Get name and age from body request
  const { type, title, skills } = req.body;

  // Creating a new Education (Model)
  const newSkill = new Skill({
    type,
    title,
    skills,
  });

  // Saving the new Person in the db
  newSkill
    .save()
    .then(skill => res.status(200).json(skill))
    .catch(error => res.status(500).json(error));
});

// @Route   PUT api/content/education/update/:id
// @desc    Update a person
// @access  Public
router.put('/update/:id', (req, res) => {
  const { type, title, skills } = req.body;

  Skill.findOneAndUpdate(
    { _id: { $eq: req.params.id } }, // Find one id equals to id in params
    { type, title, skills }, // data to be updated
    { new: true } // to mongoose returns the updated document
  )
    .then(newSkill => {
      return res.status(200).json(newSkill);
    })
    .catch(error => {
      return res.status(500).json(error);
    });
});

// @Route   DELETE api/content/education/:id
// @desc    Delete a person
// @access  Public
router.delete('/:id', (req, res) => {
  // Searching for a person and deleting
  Skill.findOneAndDelete({ _id: req.params.id })
    .then(skill => {
      // If the id of person not exists, returns a error
      if (!skill) {
        res.status(404).json({ msg: 'There is no user for this ID' });
      }

      return res.status(200).json(skill);
    })
    .catch(error => {
      // Handling the error
      return res.status(500).json(error);
    });
});

// Export the routes of person
module.exports = router;
