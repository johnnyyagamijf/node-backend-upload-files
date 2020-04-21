const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

app.use(express.json());
app.use(express.urlencoded( { extended : true }));
app.use(morgan('dev'));
app.use('/file', express.static(path.resolve(__dirname,'..', 'tmp', 'uploads')))
app.use(require('./routes'))

app.listen(4000);