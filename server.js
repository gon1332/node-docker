'use strict'

const express   = require('express')

// Parse argumets
const args = require('minimist')(process.argv.slice(2))
if (!('host' in args) || !('port' in args)) {
    console.log('host or port were not specified')
    process.exit(1)
}

const host = args['host']
const port = args['port']

// App
const app = express()

app.get('/', (req, res) => {
    res.send('Hi everyone')
})

const server = app.listen(port, host, () => {
    console.log(`Running on http://${host}:${port}`)
    console.log('Brought by', process.env.USER)
})

process.on('SIGINT', () => {
    server.close(() => {
        console.log('\nServer closed')
    })
})
