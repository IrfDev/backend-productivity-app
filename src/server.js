require('dotenv').config()

const winston = require('winston')
require('winston-mongodb')

const error = require('./Middlewares/error')

const debug = require('debug')('app:startup');
const helmet = require('helmet');
const morgan = require('morgan');

const distractions = require('./router/distractions');
const goals = require('./router/goals');
const users = require('./router/users');
const auth = require('./router/auth');

const express = require('express');
const app = express();

const {
    DB_USER,
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
} = process.env

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

winston.add(new winston.transports.File({ filename: 'logfile.log' }))
winston.add(new winston.transports.MongoDB({ db: uri, level: error }))

app.use(express.json())
app.use('/users', users);
app.use('/goals', goals);
app.use('/distractions', distractions);
app.use('/auth', auth)

app.use(error)

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