const express = require('express');
const app = express();
const { dbURI, port } = require('./config/environments');
const mongoose = require('mongoose');
const router = require('./config/router');

mongoose.connect(dbURI);

const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', router);

app.listen(port, () => console.log(`Up and running on ${port}`));
