const express = require('express')
const distractions = require('../router/distractions');
const goals = require('../router/goals');
const users = require('../router/users');
const auth = require('../router/auth');
const error = require('../Middlewares/error')
module.exports = function(app) {
    app.use(express.json())
    app.use('/users', users);
    app.use('/goals', goals);
    app.use('/distractions', distractions);
    app.use('/auth', auth)
    app.use(error)
}