const mongoose = require('mongoose');
const { Schema } = mongoose;

// Creating a new Schema for OtherField
// like certifications, interests, voluntering experineces
const OtherFieldSchema = new Schema({
  // Here, we set the names of properties
//   display name for the type, like aws certified
  name:{
      type: String,
      required: true
  },
//   example: Voluntering experinece, interests, certifications and many more
  type:{
      type: String,
      required: true
  },
//   detials of certifications like date, issued by, and many more
// same goes for interests, and voluntering experiences
  details:[
      {
          type: String
      }
  ]
});

OtherFieldSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		// returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

// Here, we export the model of persons
module.exports = mongoose.model('OtherFields', OtherFieldSchema);
