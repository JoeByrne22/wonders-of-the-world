const router = require('express').Router();
const wondersController = require('../controllers/wondersController');

router.route('/wonders')
  .get(wondersController.indexRoute);

router.route('/wonders/:id')
  .get(wondersController.showRoute);

router.route('/wonders')
  .post(wondersController.createRoute);

router.route('/wonders/:id')
  .delete(wondersController.deleteRoute);

router.route('/wonders/:id')
  .post(wondersController.updateRoute);



module.exports = router;
