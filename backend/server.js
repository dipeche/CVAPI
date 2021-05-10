// Import the packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Create an instance for express
const app = express();

// Get the jobExperience, Education, Skill and SummaryRoute routes
const JobExperience = require('./routes/jobExperienceRoute');
const EducationRoute = require('./routes/educationRoute');
const SkillRoute = require('./routes/skillRoute');
const SummaryRoute = require('./routes/summaryRoute');
const OtherFieldRoute = require('./routes/OtherFieldRoute');
const allRoute = require('./routes/allRoute');



// Apply the bodyParser middleware, to get json data from requests (Body)
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.set('view engine', 'jade');
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'build')));

// Apply the routes of /api/cpontent/work-experience
app.use('/api/work-experience', JobExperience);
app.use('/api/education', EducationRoute);
app.use('/api/skills', SkillRoute);
app.use('/api/summary', SummaryRoute);
app.use('/api/other-fields', OtherFieldRoute);
app.use('/api/all', allRoute);
app.use('*', (req, res) =>
	res.sendFile(path.join(`${__dirname}/build`, 'index.html'))
);


// Get the mongoURI for database
const db = require('./config/keys').mongoURI;

// Connecting with database
mongoose
  .connect(db, { useNewUrlParser: true })
  // If all run ok, console log the message
  .then(() => console.log('MongoDB connected'))
  // For console log any error
  .catch(err => console.log(err));

// Port declaration
const port = process.env.PORT || 9000;

// Init the express.js server
app.listen(port, () => console.log(`Server running on ${port}`));
