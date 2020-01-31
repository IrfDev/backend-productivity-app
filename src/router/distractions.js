const auth = require('../Middlewares/auth')
const express = require('express')
const distraction = require('../usecases/distraction')
const user = require('../usecases/user')
const router = express.Router()

router.get('/', async(req, res) => {
    try {
        const allDistractions = await distraction.getAll()
        res.json({
            success: true,
            message: 'All distractions',
            data: {
                distractions: allDistractions
            }
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'Something went wrong',
            error: error.message
        })
    }
})

router.post('/', auth, async(req, res) => {
    try {
        const newDistractionData = req.body
        const newDistraction = await distraction.create(newDistractionData)
        const updateUser = await user.updateById(newDistractionData.user, {
            $push: { distractions: newDistraction._id }
        })
        res.json({
            success: true,
            message: 'distraction created',
            data: {
                distraction: newDistraction,
                updateUser
            }
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'Something went wrong',
            error: error.message
        })
    }

})

router.delete('/:id', async(req, res) => {
    try {
        const { id } = req.params
        const deletedDistraction = await post.deleteById(id)
        res.json({
            success: true,
            message: `Post ${id} deleted`,
            data: {
                distraction: deletedDistraction
            }
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'Something went wrong',
            error: error.message
        })
    }

})
router.patch('/:id', async(req, res) => {

    try {
        const { id } = req.params
        const distractionData = {
            name,
            time,
            category,
            user
        } = req.body
        const distractionUpdated = await distraction.updateById(id, distractionData)
        res.json({
            success: true,
            message: `Post ${id} updated`,
            data: {
                distraction: distractionUpdated
            }
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'Something went wrong',
            error: error.message
        })
    }
})

module.exports = router