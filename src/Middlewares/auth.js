const bcrypt = require('../Lib/bcrypt')
const User = require('../Models/user')
const express = require('express')

const router = express.Router()

router.post('/', async(req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email })
        if (!user) return res.status(400).send('Invalidd email or password')

        let validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) return res.status(400).send('Invalidas email or password')

        res.json({
            success: true,
            message: 'Authentications is correct',
            data: {
                token: true
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