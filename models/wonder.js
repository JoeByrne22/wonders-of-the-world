const mongoose = require('mongoose');

const wonderSchema = mongoose.Schema({
  name: String,
  country: String,
  image: String,
  location: {
    lat: { type: Number},
    lng: { type: Number}
  }
});

const wonderModel = mongoose.model('Wonder', wonderSchema);
module.exports = wonderModel;
