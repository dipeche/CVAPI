const express = require('express');
const router = express.Router();

const Summary = require('../models/Summary');

// @Route   GET api/content/summary/
// @desc    Get all summaries
// @access  Public
router.get('/', (req, res) => {
  // Sending html in response with message

  // Query all documents in db
  Summary.find()
    .then(summaries => {
      // Returning documents to client
      return res.json(summaries[0].toJSON());
    })
    .catch(error => {
      // Error handling
      return res.status(500).json(error);
    });
});

// router.get('/:id', (req, res) => {
  
//     Summary.findOne(
//       { _id: { $eq: req.params.id } }, // Find one id equals to id in params
//     )
//       .then(summary => {
//         return res.json(summary);
//       })
//       .catch(error => {
//         return res.status(500).json(error);
//       });
//   });


// @Route   POST api/content/education/new
// @desc    Creating a new person
// @access  Public
router.post('/new', (req, res) => {

  // Get name and age from body request
  const { name, title, summary, address, email, phone, social} = req.body;
  console.log(req.body)
  if(name=="Dipesh K. Sharma"){
  // Creating a new Summary (Model)
  const newSummary = new Summary({
    name, title, summary, address, email, phone, social
  });

  // Saving the new Person in the db
      newSummary
        .save()
        .then(summary => res.status(200).json(summary))
        .catch(error => res.status(500).json(error));
    }else{
      return res.status(403).json("Not authorized");
    }
  
});


// @Route   PUT api/content/education/update/:id
// @desc    Update a person
// @access  Public
router.put('/update/:id', (req, res) => {
  const { name, title, summary, address, email, phone, social } = req.body;

  Summary.findOneAndUpdate(
    { _id: { $eq: req.params.id } }, // Find one id equals to id in params
    { name, title, summary, address, email, phone, social }, // data to be updated
    { new: true } // to mongoose returns the updated document
  )
    .then(newSummary => {
      return res.status(200).json(newSummary);
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
  Summary.findOneAndDelete({ _id: req.params.id })
    .then(summary => {
      // If the id of person not exists, returns a error
      if (!summary) {
        res.status(404).json({ msg: 'There is no user for this ID' });
      }

      return res.status(200).json(summary);
    })
    .catch(error => {
      // Handling the error
      return res.status(500).json(error);
    });
});

// Export the routes of person
module.exports = router;
