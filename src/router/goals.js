const express = require('express')
const goal = require('../usecases/goal')
const router = express.Router()

router.get('/', async(req, res) => {
    try {
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

router.post('/', async(req, res) => {
    try {
        const newGoalData = req.body
        const newGoal = await goal.create(newGoalData)
        res.json({
            success: true,
            message: 'New Goal created',
            data: {
                goal: newGoal
            }
        })
    } catch (eror) {
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

    } catch (eror) {
        res.json({
            success: false,
            message: 'Something went wrong while create a goal',
            error: error.message
        })
    }
})

module.exports = router