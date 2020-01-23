require('dotenv').config()

const mongoose = require('mongoose');

const {
    DB_USER,
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
} = process.env

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

module.exports = () => mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})