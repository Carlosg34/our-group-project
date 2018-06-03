// module imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const key = require('./key/mongokey.js');   this is not reading for some reasons
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

// app middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

//trying to connect to server
app.get('/', (req, res) => {
  res.send('This is functional');
});

// connecting to mongodb
mongoose.connect('mongodb://miranda:1papertrack@ds139970.mlab.com:39970/papertrack', () => {
  console.log("Connected to database");
});

// Development mode port
const port = process.env.PORT || 5000;
app.listen(port)

module.exports = app;
