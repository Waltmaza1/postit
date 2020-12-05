'use strict'

const router = require('express').Router();
const commentController = require('../../controllers/commentContoller');

router.route('/new')
      .post(commentController.create);

router.route('/get')
      .get(commentController.getComments)

module.exports = router;