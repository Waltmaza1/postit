'use strict'

const db = require('../models');

module.exports = {
    create: function(req, res){
        db.Comment.create(req.body)
        .then(dbcomment => res.json(dbcomment))
        .catch(err => res.status(422).json(err))
    }
}