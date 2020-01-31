const jwt = require('jsonwebtoken')
const { JWT_SECRET_WORD } = process.env

function sign(payload = {}) {
    return jwt.sign(payload, JWT_SECRET_WORD)
}

function verify(token = '') {
    return jwt.verify(token, JWT_SECRET_WORD)
}

module.exports = {
    sign,
    verify
}