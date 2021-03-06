const Goal = require('../Models/goal')
const User = require('../Models/user')

function create({
    day,
    description,
    category,
    isAchived,
    user
}) {
    const newGoal = new Goal({
        day,
        description,
        category,
        isAchived,
        user
    })
    return newGoal.save()
}

function getAll() {
    return Goal.find().populate('user', '-distractions -goals', User)
}

function getById(id) {
    return Goal.findById(id)
}

function deletebyId(id) {
    return Goal.findByIdAndDelete(id)
}

function updateById(id, goalData) {
    return Goal.findByIdAndUpdate(id, goalData)
}

module.exports = {
    create,
    getAll,
    deletebyId,
    updateById,
    getById
}