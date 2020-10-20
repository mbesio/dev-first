// build and ajax/ axios request to get jobs from an API
const axios = require('axios');
const adzunaAPIkeys = require('./adzunaAPIkeys.js');

module.exports = function getJobs(location, keyWords, cb) {
  var apiId = adzunaAPIkeys.adzunaApplicationID.toString();
  var apiKey = adzunaAPIkeys.adzunaApplicationKEY.toString();
  var url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${apiId}&app_key=${apiKey}&what=${keyWords[0]}%20${keyWords[1]}%20${keyWords[2]}&location0=us&location1=${location}&full_time=1`;

  axios.get(url)
    .then(cb)
    .catch((err) => {
      console.log('There was an error: ', err);
    })
}