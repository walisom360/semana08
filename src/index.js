const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(
  'mongodb+srv://semana:semana@cluster0-bah0l.mongodb.net/omnistack?retryWrites=true&w=majority',
  {
    useNewUrlParser: true
  }
);
const routes = require('./routes');

app.use(express.json());
app.use(routes);

app.listen(3333);
