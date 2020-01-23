const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 180,
        pattern: /^.+@.+\..+$/,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        max: 180,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 200
    },
    distractions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'distractions'
    }],
    goals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'goals'
    }]
})

module.exports = mongoose.model('Users', userSchema)