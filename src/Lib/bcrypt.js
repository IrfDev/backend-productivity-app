require('dotenv').config()
const bcrypt = require('bcrypt')
const { SALT_ROUND } = process.env

function hash(plainText) {
    return bcrypt.hash(plainText, parseInt(SALT_ROUND))
}
module.exports = {
    ...bcrypt,
    hash
}