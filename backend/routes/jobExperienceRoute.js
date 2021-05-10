const express = require('express');
const router = express.Router();

const JobExperience = require('../models/JobExperience');

// @Route   GET api/person/
// @desc    Get all persons
// @access  Public
router.get('/', (req, res) => {
  // Sending html in response with message
  // res.send('Hello from persons');

  // Query all documents in db
  JobExperience.find()
    .then(JobExperiences => {
      // Returning documents to client
      return res.json(JobExperiences.map(exp=>exp.toJSON()));
    })
    .catch(error => {
      // Error handling
      return res.status(500).json(error);
    });
});

// router.get('/work-experience', (req, res)=>{
//   Person.
// })

// @Route   POST api/person/new
// @desc    Creating a new person
// @access  Public
router.post('/new', (req, res) => {
  // Get name and age from body request
  const { title, company, address, date, tasks,  description } = req.body;

  // Creating a new Person (Model)
  const newJob = new JobExperience({
    title,
    company,
    address,
    date,
    tasks,
    description
  });

  // Saving the new Person in the db
  newJob
    .save()
    .then(job => res.json(job))
    .catch(error => res.status(500).json(error));
});

// @Route   PUT api/person/update/:id
// @desc    Update a person
// @access  Public
router.put('/update/:id', (req, res) => {
  const { name, age } = req.body;

  Person.findOneAndUpdate(
    { _id: { $eq: req.params.id } }, // Find one id equals to id in params
    { name, age }, // data to be updated
    { new: true } // to mongoose returns the updated document
  )
    .then(newPerson => {
      return res.status(200).json(newPerson);
    })
    .catch(error => {
      return res.status(500).json(error);
    });
});

// @Route   DELETE api/person/:id
// @desc    Delete a person
// @access  Public
router.delete('/:id', (req, res) => {
  // Searching for a person and deleting
  JobExperience.findOneAndDelete({ _id: req.params.id })
    .then(job => {
      // If the id of person not exists, returns a error
      if (!job) {
        res.status(404).json({ msg: 'There is no user for this ID' });
      }

      return res.status(200).json(job);
    })
    .catch(error => {
      // Handling the error
      return res.status(500).json(error);
    });
});

// Export the routes of person
module.exports = router;
