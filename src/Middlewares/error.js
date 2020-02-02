const logger = require('../Lib/winston')

module.exports = function(err, req, res, next) {
    logger.log(err)
    res.status(500).send('something failed in the request ')
}