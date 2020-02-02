const auth = require('../Middlewares/auth')
const express = require('express')
const goal = require('../usecases/goal')
const user = require('../usecases/user')

const router = express.Router()

router.get('/', async(req, res) => {
    try {
        const token = req.header('x-auth-token')
        const allGoals = await goal.getAll()
        res.json({
            sucess: true,
            message: 'All Goals',
            data: {
                goals: allGoals
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
        const deletedGoal = await goal.deletebyId(id)
        res.json({
            sucess: true,
            message: `Goal ${id} deleted`,
            data: {
                goals: deletedGoal
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

router.post('/', auth, async(req, res) => {
    try {
        const newGoalData = req.body
        const newGoal = await goal.create(newGoalData)
        const updateUser = await user.updateById(newGoal.user, {
            $push: { goals: newGoal._id }
        })
        res.json({
            success: true,
            message: 'New Goal created',
            data: {
                goal: newGoal,
                updateUser
            }
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'Something went wrong while create a goal',
            error: error.message
        })
    }
})

router.patch('/:id', async(req, res) => {
    try {
        const { id } = req.params
        const goalData = {
            day,
            description,
            category,
            isAchived,
            user,
        } = req.body
        const goalUpdated = await goal.updateById(id, goalData)

        res.json({
            success: true,
            message: `Goal ${id} updated`,
            data: {
                goal: goalUpdated
            }
        })

    } catch (error) {
        res.json({
            success: false,
            message: 'Something went wrong while create a goal',
            error: error.message
        })
    }
})

module.exports = router