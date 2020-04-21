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
//mongodb+srv://bd_user:bduser@cluster0-02jjc.mongodb.net/upload?retryWrites=true&w=majority

app.use(express.json());
app.use(express.urlencoded( { extended : true }));
app.use(morgan('dev'));
app.use('/file', express.static(path.resolve(__dirname,'..', 'tmp', 'uploads')))
app.use(require('./routes'))
//mongodb+srv://bd_user:<password>@cluster0-02jjc.mongodb.net/test?retryWrites=true&w=majority

app.listen(4000);