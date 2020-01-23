const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', { title: 'My Express router', message: 'Hello nigger, this is a pug example for a simple view in pug' });
})

module.exports = router