const jwt = require('jsonwebtoken')
const colors = require('colors')

module.exports = {
    authenticate(req, res, next) {
        try {
            const decode = jwt.verify(req.headers.token, process.env.SECRET)

            console.log('====authenticate success===='.green.bold)
            req.authenticated = decode
            next()
        } catch (err) {
            res.status(401).json({
                msg: 'user not authenticated'
            })
        }

    },

    authorize(req, res, next) {
        if (req.authenticated.role !== 'admin') {
            res.status(401).json({
                msg: 'user not authorized'
            })
        } else {
            console.log('=====authorize success====='.green.bold)
            next()
        }
    },

    verify(req, res, next) {
        if (req.authenticated.id.toString() === req.params.id || req.authenticated.role === "admin") {
            console.log('=====authorize success====='.green.bold)
            next()
        } else {
            res.status(401).json({
                msg: 'user not verified',
            })
        }
    }
}   