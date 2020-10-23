// query the database
const database = require('./index.js');

function getUserDataFromDB(username, password, cb) {

  database.connection.query('SELECT * FROM users WHERE email = (?) AND password = (?)',[username, password], (err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  });
}

exports.getUserDataFromDB = getUserDataFromDB;