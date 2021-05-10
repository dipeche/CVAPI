const mongoose = require('mongoose');
const { Schema } = mongoose;

// Creating a new Schema for Person
const ExpSchema = new Schema({
  // Here, we set the names of properties
  title: {
    // The type
    type: String,
    // And if is required or not
    required: true
  },
  company:{
    type: String,
    required: true
  },
  address: {
    type: String, 
    required: true
  },
  date:{
    from: {
      type: String
    },
    to: {
      type: String
    }
  },
  tasks:[
    {
      type: String
    }
  ],
  description: {
    type: String,
    required:true
  }
});

ExpSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		// returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

// Here, we export the model of persons
module.exports = mongoose.model('jobExperiences', ExpSchema);
