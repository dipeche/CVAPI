const express = require('express');
const router = express.Router();

const Education = require('../models/Education');

// @Route   GET api/content/education/
// @desc    Get all educations
// @access  Public
router.get('/', (req, res) => {
  // Sending html in response with message

  // Query all documents in db
  Education.find()
    .then(educations => {
      // Returning documents to client
      const curatedEducations = educations.map(education=>education.toJSON())
      return res.json(curatedEducations);
    })
    .catch(error => {
      // Error handling
      return res.status(500).json(error);
    });
});

router.get('/:id', (req, res) => {
  
    Education.findOne(
      { _id: { $eq: req.params.id } }, // Find one id equals to id in params
    )
      .then(education => {
        return res.json(education);
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
  const { degree, college, address, date,courses } = req.body;

  // Creating a new Education (Model)
  const newEducation = new Education({
    degree,
    college,
    address,
    date,
    courses
  });

  // Saving the new Person in the db
  return newEducation
    .save()
    .then(education => res.status(200).json(education))
    .catch(error => res.status(500).json(error));
});

// @Route   PUT api/content/education/update/:id
// @desc    Update a person
// @access  Public
router.put('/update/:id', (req, res) => {
  const { degree, college, address, date,courses } = req.body;

  Education.findOneAndUpdate(
    { _id: { $eq: req.params.id } }, // Find one id equals to id in params
    { degree, college, address, date,courses }, // data to be updated
    { new: true } // to mongoose returns the updated document
  )
    .then(newEducation => {
      return res.status(200).json(newEducation);
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
  Education.findOneAndDelete({ _id: req.params.id })
    .then(education => {
      // If the id of person not exists, returns a error
      if (!education) {
        res.status(404).json({ msg: 'There is no user for this ID' });
      }
      return res.status(200).json(education);
    })
    .catch(error => {
      // Handling the error
      return res.status(500).json(error);
    });
});

// Export the routes of person
module.exports = router;
