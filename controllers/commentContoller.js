'use strict'

const db = require('../models');

module.exports = {

    create: function(req, res){
        console.log('post: ',req.body)
        db.UserComment.create(req.body)
        .then(dbcomment => res.json(dbcomment))
        .catch(err => res.status(422).json(err))
    },
    getComments: function(req, res){
        console.log('get: ',req.body)
        db.UserComment.find(req.body)
        .then(dbcomments => res.json(dbcomments))
        .catch(err => res.status(422).json(err))
    }
}