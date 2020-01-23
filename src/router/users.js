const express = require('express')
const user = require('../usecases/user')
const router = express.Router()

router.get('/', async(req, res) => {
    try {
        const allUsers = await user.getAll()
        res.json({
            sucess: true,
            message: 'All users',
            data: {
                users: allUsers
            }
        })
    } catch (error) {
        res.json({
            sucess: false,
            message: 'Something went wrong',
            error: error.message
        })
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const { id } = req.body
        const deletedUser = await user.deletebyId(id)
        res.json({
            sucess: true,
            message: `user ${id} deleted`,
            data: {
                users: deletedUser
            }
        })
    } catch (error) {
        res.json({
            sucess: false,
            message: 'Something went wrong',
            error: error.message
        })
    }
})

router.post('/', async(req, res) => {
    try {
        const newUserData = req.body
        const newUser = await user.create(newUserData)
        res.json({
            success: true,
            message: 'New user created',
            data: {
                user: newUser
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