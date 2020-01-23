const User = require('../Models/user')

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