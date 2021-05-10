const mongoose = require('mongoose');
const { Schema } = mongoose;

// Creating a new Schema for Person
const SummarySchema = new Schema({
  // Here, we set the names of properties
  name:{
      type: String,
      required: true
  },
  title: {
    // The type
    type: String,
    // And if is required or not
    required: true
  },
  summary:{
    type: String,
    required: true
  },
  address: {
    type: String, 
    required: true
  },
  email:{
      type: String,
      required: true
  },
  phone: {
      type: String,
      required: true
  },
  social:{
      linkedIn:{
          type: String,
      },
      facebook:{
        type: String
      },
      github: {
          type: String
      }
  }
});

SummarySchema.set('toJSON', {
	transform: (document, returnedObject) => {
		// returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

// Here, we export the model of persons
module.exports = mongoose.model('Summary', SummarySchema);
