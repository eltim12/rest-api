const User = require('../models').User
const jwt = require('jsonwebtoken')
const env = require('dotenv').config()
const bcrypt = require('../helpers/bcrypt')

module.exports = {
    async getAll(req, res) {
        try {
            let allUsers = await User.findAll()
            res.status(200).json(allUsers)
        } catch (err) {
            res.status(500), json({
                msg: err.message
            })
        }
    },

    async findOne(req, res) {
        let foundUser = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        if (foundUser) {
            res.status(200).json(foundUser)
        } else {
            res.status(404).json({
                msg: 'user not found'
            })
        }
    },

    async register(req, res) {
        let createdUser = await User.create({
            username: req.body.username,
            password: req.body.password,
            role: req.body.role
        })
        res.status(201).json(createdUser)
    },

    async update(req, res) {
        let updatedUser = await User.update(req.body,
            { returning: true, where: { id: req.params.id } }
        )
        res.status(200).json(updatedUser[1][0])
    },

    async delete(req, res) {
        let userData = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        if (!userData) {
            res.status(404).json({
                msg: 'user not found'
            })
        } else {
            let username = userData.username

            let deleted = await User.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({
                msg: `user ${username} success deleted`
            })
        }
    },

    login(req, res) {
        User
            .findOne({
                where: {
                    username: req.body.username
                }
            })
            .then(foundUser => {
                console.log(req.body.username)
                console.log('=================', foundUser)
                if (!foundUser) {
                    throw Error(`username/password wrong.`)
                } else {
                    if (bcrypt.compare(req.body.password, foundUser.dataValues.password) === false) {
                        console.log('else 3=========')
                        throw Error(`username/password wrong.`)
                    }
                    else {
                        console.log('masok===========', foundUser)
                        let token = jwt.sign(foundUser.dataValues, process.env.SECRET)
                        res.status(200).json({
                            token
                        })
                    }
                }
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({
                    msg: err.message
                })
            })
    }
}