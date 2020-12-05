'use strict'

const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/signup')
      .post(userController.create);

router.route('/get')
      .get(userController.findAll)

module.exports = router;