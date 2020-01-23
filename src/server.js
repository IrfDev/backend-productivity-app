const debug = require('debug')('app:startup');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const distractions = require('./router/distractions');
const goals = require('./router/goals');
const users = require('./router/users');
const app = express();

app.use(express.json())
app.use('/users', users);
app.use('/goals', goals);
app.use('/distractions', distractions);

app.set('view engine', 'pug');
app.set('views', './src/views');

app.use(express.urlencoded({ extended: true }))
app.use(helmet())

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    debug('Morgan enabled...');
}

// Process it's a node object that return some information
console.log(`app:${app.get('env')}`)


// Aquí es dónde puedes aplicar algo de código dependiendo del entorno de programación que estés utilizando.
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled...');
}
module.exports = app