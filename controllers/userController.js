'use strict'

const db = require('../models');

module.exports = {
    create: function ( req, res){
        db.User.create(req.body)
        .then(dbuser => res.json(dbuser))
        .catch(err => res.status(422).json(err))
    },
    findAll: function(req, res) {
        db.User.find(req.query)
        .then(dbuser => res.json(dbuser))
        .catch(err => res.status(422).json(err))

    }
}

