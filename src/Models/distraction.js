const mongoose = require('mongoose')

const distractionSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        enum: [
            'objeto',
            'persona',
            'aplicación',
            'conversación',
            'personal',
            'película',
        ],
    },
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
})

module.exports = mongoose.model('Distraction', distractionSchema)