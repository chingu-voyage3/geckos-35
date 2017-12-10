// const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// const mongo = require('mongodb').MongoClient;
const mongoose = require('mongoose');

console.log(process.env.NODE_ENV);
let env = process.env.NODE_ENV.trim() || 'development';
const port = process.env.PORT || 3000;

const dbUrl = 'mongodb://chingus:chingus99@ds135196.mlab.com:35196/potify';
// const dbUrl = 'mongodb://localhost:27017/potify';

app.use(expressSession({ secret: 'chingusVoyage3' }));
app.use(require('cors')());

if (env.trim() === 'development') {
  app.use(require('morgan')('dev'));
}

app.use(bodyParser.json());

mongoose.connect(dbUrl, {
  useMongoClient: true
});
let db = mongoose.connection;
const dropDB = () => {
  mongoose.connection.db.dropDatabase();
};
db.on('error', console.error.bind(console, 'connection error:'));

require('./router/app-routes.js')(app, db);

db.once('open', function() {
  // we're connected!
  console.log(`connected to database: ${dbUrl}`);
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server for Mongodb running on port: ${port}`);
  }
});
