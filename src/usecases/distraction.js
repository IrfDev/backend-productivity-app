const User = require('../Models/user')
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
    return Distraction.find().populate('user', '-distractions -goals', User)
}

function getById(id) {
    return Distraction.findById(id)
}

function deletebyId(id) {
    return Distraction.findByIdAndDelete(id)
}

function updateById(id, distractionData) {
    return Distraction.findByIdAndUpdate(id, distractionData)
}

module.exports = {
    create,
    getAll,
    deletebyId,
    updateById,
    getById
}