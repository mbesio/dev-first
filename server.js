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

  models.getUserDataFromDB(username, password, (result) => {
    console.log('result in server: ', result)
    if (result.length === 0 ) {
      console.log('User does not exits');
      res.status(300).end();
    } else {
      console.log('User exists');
      res.status(200).end(result);
    }
  });
//    .then(console.log('in the then block!'))
//    .catch(console.log('in the catch block!'))

  // check if user and pwd exist in the user database
    // if true, pass back infomration for thet user stored in the database to the client
  // else, return message that user does not exist
  console.log('need to query the database')
  res.end('hi');
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