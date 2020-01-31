const logger = require('./Lib/winston')
const error = require('./Middlewares/error')

const debug = require('debug')('app:startup');
const helmet = require('helmet');
const morgan = require('morgan');

const express = require('express');
const app = express();
require('./Lib/routes')(app)


process.on('uncaughtException', (ex) => {
    logger.logger.error(ex.message, ex)
    process.exit
})
process.on('unhandledRejection', (ex) => {
    logger.logger.error(ex.message, ex)
    process.exit
})

app.use(error)
    // logger.log('error', error)

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