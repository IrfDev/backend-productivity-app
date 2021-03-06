require('dotenv').config()
const { logger } = require('./src/Lib/winston')


const dbConnect = require('./src/lib/db')
const server = require('./src/server')

var serve

const listenServer = function() {
    return new Promise((resolve, reject) => {
        server.listen(8080, () => {
            resolve()
        })
    })
}

async function main() {
    await dbConnect()
    console.log('DB CONNECTED')
    await listenServer()
    console.log(`SERVER LISTENING`)
}

main()
    .then(() => {
        console.log('api ready')
    })
    .catch(error => {
        console.error('ERROR', error)
        logger.error('Something wrong', error)
    })