const User = require('../Models/user')
const Goal = require('../Models/goal')
const Distraction = require('../Models/distraction')
const bcrypt = require('../Lib/bcrypt')

async function create({
    name,
    email,
    age,
    password,
}) {
    const hash = await bcrypt.hash(password)
    const newUser = new User({
        name,
        email,
        age,
        password: hash,
    })
    return newUser.save()
}

function getAll() {
    return User.find().select('name age email')
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