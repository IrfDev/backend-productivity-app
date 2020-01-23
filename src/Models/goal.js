const mongoose = require('mongoose')

const goalSchema = new mongoose.Schema({
    day: {
        type: String,
        enum: [
            'Monday',
            'Thursday',
            'Wednsday',
            'Tuesday',
            'Friday',
            'Friday',
            'Saturday',
            'Sunday',
        ],
        required: true
    },
    description: {
        type: String,
        minlength: 3,
        maxlength: 40,
        required: true
    },
    category: {
        type: String,
        enum: [
            'Personal',
            'Físico',
            'Mental',
            'De tiempo',
            'De espacio',
            'Paz mental'
        ],

    },
    isAchived: {
        type: Boolean,
        required: true,
    },
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
})

module.exports = mongoose.model('Goal', goalSchema)