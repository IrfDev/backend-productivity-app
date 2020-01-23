const Distraction = require('../Models/distraction')

function create({
    name,
    time,
    category,
    user

}) {
    const newDistraction = new Distraction({
        name,
        time,
        category,
        user
    })
    return newDistraction.save()
}

function getAll() {
    return Goal.find()
}

function getById(id) {
    return Goal.findById(id)
}

function deletebyId(id) {
    return Goal.findByIdAndDelete(id)
}

function updateById(id, distractionData) {
    return Goal.findByIdAndUpdate(id, distractionData)
}

module.exports = {
    create,
    getAll,
    deletebyId,
    updateById,
    getById
}