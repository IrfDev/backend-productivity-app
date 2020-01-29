require('dotenv').config()
const winston = require('winston')
require('winston-mongodb')
const error = require('../Middlewares/error')

const {
    DB_USER,
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
} = process.env

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: 'logfile.log' }),
        new winston.transports.MongoDB({ db: uri, level: error }),
        new winston.transports.Console({ colorize: true, prettyPrint: true })
    ]
})
module.exports = { winston, logger }