'use strict'

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment:{
        body: String,
        date: Date
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const UserComment = mongoose.model('UserComment', commentSchema);

module.exports = UserComment;