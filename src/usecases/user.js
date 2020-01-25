const User = require('../Models/user')
const Goal = require('../Models/goal')
const Distraction = require('../Models/distraction')

function create({
    name,
    email,
    age,
    password,
}) {
    const newUser = new User({
        name,
        email,
        age,
        password,
    })
    return newUser.save()
}

function getAll() {
    return User.find()
        .populate('goals', '-user', Goal)
        .populate('distractions', '-user', Distraction)
}

function getById(id) {
    return User.findById(id)
}

function deletebyId(id) {
    return User.findByIdAndDelete(id)
}

function updateById(id, userData) {
    return User.findByIdAndUpdate(id, userData)
}

module.exports = {
    create,
    getAll,
    deletebyId,
    updateById,
    getById
}