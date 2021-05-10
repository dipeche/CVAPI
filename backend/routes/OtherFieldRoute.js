const express = require('express');
const router = express.Router();

// importing model
const OtherField = require('../models/OtherField');

// @Route   GET api/content/other-fields/
// @desc    Get all other fields
// @access  Public
router.get('/', (req, res) => {
  // Sending html in response with message

  // Query all documents in db
  OtherField.find()
    .then(otherFields => {
      // Returning documents to client
      return res.json(otherFields.map(field=>field.toJSON()));
    })
    .catch(error => {
      // Error handling
      return res.status(500).json(error);
    });
});

router.get('/:id', (req, res) => {
  
    OtherField.findOne(
      { _id: { $eq: req.params.id } }, // Find one id equals to id in params
    )
      .then(otherField => {
        return res.json(otherField);
      })
      .catch(error => {
        return res.status(500).json(error);
      });
  });


// @Route   POST api/content/other-fields/new
// @desc    Creating a new person
// @access  Public
router.post('/new', (req, res) => {

  // Get name and age from body request
  const { name, type, details} = req.body;
  // Creating a new Otherfield (Model)
  const newOtherField = new OtherField({
    name, type, details
  });
  console.log(newOtherField)

  // Saving the new otherFiled in the db
      newOtherField
        .save()
        .then(otherField => res.status(200).json(otherField))
        .catch(error => res.status(500).json(error));
});


// @Route   PUT api/content/education/update/:id
// @desc    Update a person
// @access  Public
router.put('/update/:id', (req, res) => {
  const { name, type, details } = req.body;

  OtherField.findOneAndUpdate(
    { _id: { $eq: req.params.id } }, // Find one id equals to id in params
    { name, type, details }, // data to be updated
    { new: true } // to mongoose returns the updated document
  )
    .then(newOtherField => {
      return res.status(200).json(newOtherField);
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
  OtherField.findOneAndDelete({ _id: req.params.id })
    .then(otherField => {
      // If the id of person not exists, returns a error
      if (!otherField) {
        res.status(404).json({ msg: 'There is no user for this ID' });
      }

      return res.status(200).json(otherField);
    })
    .catch(error => {
      // Handling the error
      return res.status(500).json(error);
    });
});

// Export the routes of person
module.exports = router;
