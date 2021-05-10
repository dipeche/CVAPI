const mongoose = require('mongoose');
const { Schema } = mongoose;

// Creating a new Schema for Person
const SkillSchema = new Schema({
  // Here, we set the names of properties
  type: {
    // The type
    type: String,
    // And if is required or not
    required: true
  },
  title:{
      type: String,
  },
  skills:[
    {
      type: String
    }
  ]
});

SkillSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		// returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

// Here, we export the model of persons
module.exports = mongoose.model('Skills', SkillSchema);
