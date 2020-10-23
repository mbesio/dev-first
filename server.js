const express = require('express');
const app = express();

const bodyParser = require('body-parser');
var models = require('./database/models.js');
var Promise = require("bluebird");


const getJobs = require('./server/models.js');
const database = require('./database/index.js');

const port = 3000;

//middleware - body parser middleware, need to better understand what this does
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static('client/dist'));

app.post('/newuser', (req, res) => {
  console.log('req.body ', req.body);
  var newUser = req.body;

  // link up the database
  //database.connection.connect();

  database.connection.query('INSERT INTO users SET ?', newUser, (err, result) => {
    if (err) {
      console.log('There was an error: ', err);
      res.status(400).end();
    } else {
      console.log('Success: ', result);
      res.status(201).end('Ciao');
    }
  })

});

app.get('/login', (req, res) => {
  var username = req.query.loginEmail;
  var password = req.query.loginPassword;

  models.getUserDataFromDB(username, password, (err, result) => {
    console.log('result in server: ', result)
    if (result.length === 0 ) {
      console.log('User does not exits');
      res.status(400).end();
    } else {
      console.log('User exists');
      var returnObject = {
        firstName: result[0].firstName,
        lastName: result[0].lastName,
        email: result[0].email,
        password: result[0].password,
        location: result[0].location,
        yearsExperience: result[0].yearsExperience,
        language: result[0].language,
        languageSkill: result[0].languageSkill,
        frontEndFramework: result[0].frontEndFramework,
        frontEndFrameworkSkill: result[0].frontEndFrameworkSkill,
        backEndFramework: result[0].backEndFramework,
        backEndFrameworkSkill: result[0].backEndFrameworkSkill,
        aerospace: result[0].aerospace,
        construction: result[0].construction,
        education: result[0].education,
        energy: result[0].energy,
        entertainment: result[0].entertainment,
        finance: result[0].finance,
        food: result[0].food,
        healthcare: result[0].healthcare,
        hospitality: result[0].hospitality,
        tech: result[0].tech,
        telco: result[0].telco,
        transport: result[0].transport
      }
      console.log('returnObject ', returnObject);

      res.status(200).end(JSON.stringify(returnObject));

    }
  });
  //res.end('hi');
})

app.get('/jobs', (req, res) => {
  console.log('received a get request to go and fetch some tailored jobs');

  var location = req.query.location;
  var keyWords = req.query.keyWords;

  getJobs(location, keyWords, (response) => {
    // parse top 3 jobs and send them back to the client
    var jobs = [];
    var apiResponse = response.data.results;
    for (var i = 0; i < 3; i++) {
      var currentJob = {};
      currentJob['title'] = apiResponse[i].title;
      currentJob['description'] = apiResponse[i].description;
      currentJob['location'] = apiResponse[i].location.display_name;
      currentJob['company'] = apiResponse[i].company.display_name;
      jobs.push(currentJob);
    }
    // return the jobs array to the client
    res.end(JSON.stringify(jobs));
  });
});


app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});