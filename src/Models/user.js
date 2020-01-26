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
        unique: true,
        maxlength: 180,
        pattern: /^.+@.+\..+$/,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        max: 180
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 1040,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'analyst'],
        required: true
    },
    distractions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'distractions'
    }],
    goals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'goals'
    }],
})

module.exports = mongoose.model('User', userSchema)