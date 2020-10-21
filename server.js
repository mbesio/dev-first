const express = require('express');
const bodyParser = require('body-parser');

const getJobs = require('./server/models.js');

const app = express();
const port = 3000;

//middleware - body parser middleware, need to better understand what this does
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static('client/dist'));

app.get('/jobs', (req, res) => {
  console.log('received a get request to go and fetch some tailored jobs');

  var location = req.query.location;
  var keyWords = req.query.keyWords;
  console.log('location ', location);
  console.log('keyWords ', keyWords);

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