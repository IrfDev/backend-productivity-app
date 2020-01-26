const jwt = require('../Lib/jwt')

function auth(req, res, next) {
    const token = req.header('x-auth-token')
    if (!token) res.status(401).send('Access denied, you need a web token')
    try {
        const decoded = jwt.verify(token)
        req.user = decoded
        next()
    } catch (ex) {
        res.json({
            sucess: false,
            status: 400,
            message: 'Invalid token',
            error: ex.message
        })
    }
}

module.exports = auth