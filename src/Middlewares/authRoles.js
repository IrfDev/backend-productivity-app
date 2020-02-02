module.exports = function(req, res, next) {
        if (!req.user.role === 'analyst') return res.status(403).send('Acceso denegado')
        next()
    }
    // 401 Unauthorized, 403  Forbidden (no puedes acceder al recurso)