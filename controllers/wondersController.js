const Wonder = require('../models/wonder');


function indexRoute(req, res, next) {
  console.log('index route running');
  Wonder.find().then(wonders => res.json(wonders))
    .catch(next);
}

function showRoute(req, res, next) {
  console.log('show route working');
  Wonder.findById(req.params.id)
    .then(wonder => res.json(wonder))
    .catch(next);
}

function createRoute(req, res, next) {
  Wonder.create(req.body)
    .then(wonder => res.json(wonder))
    .catch(next);
}

function deleteRoute(req, res, next) {
  console.log('delete route is running');
  Wonder.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

function updateRoute(req, res, next) {
  console.log('UPDATE route is running');
  Wonder.findById(req.params.id)
    .then(wonder => wonder.set(req.body))
    .then(wonder => wonder.save())
    .then(wonder => res.json(wonder))
    .catch(next);
}


module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute,
  createRoute: createRoute,
  deleteRoute: deleteRoute,
  updateRoute: updateRoute
};
