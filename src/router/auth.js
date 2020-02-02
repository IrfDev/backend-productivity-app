const jwt = require('../Lib/jwt')
const bcrypt = require('../Lib/bcrypt')
const User = require('../Models/user')
const express = require('express')


const router = express.Router()

router.post('/', async(req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email })
        if (!user) return res.status(400).send('Invalid email or password')

        let validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) return res.status(400).send('Invalid email or password')

        const webToken = jwt.sign({ _id: user._id, role: user.role })

        res.json({
            success: true,
            message: 'Authentications is correct',
            data: {
                token: webToken
            }
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'Something went wrong while create a user',
            error: error.message
        })
    }
})

router.patch('/:id', async(req, res) => {
    try {
        const { id } = req.params
        const userData = {
            day,
            description,
            category,
            isAchived,
            user,
        } = req.body
        const userUpdated = await user.updateById(id, userData)

        res.json({
            success: true,
            message: `user ${id} updated`,
            data: {
                user: userUpdated
            }
        })

    } catch (eror) {
        res.json({
            success: false,
            message: 'Something went wrong while create a user',
            error: error.message
        })
    }
})

module.exports = router