const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        minlength: 5,
        maxlength: 255,

    },
    category: {
        type: String,
        enum: ['web', 'mobile', 'network']
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            validator: function(v) {
                return v && v.length > 0
            },
            message: 'A course should hace at least one tag'
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        min: 10,
        max: 200,
        get: v => Math.round(v),
        set: v => Math.round(v),
    }
})

const Course = mongoose.model('Course', courseSchema);

// async function getCourses() {
//     let courses = await Course
//         .find({ author: 'IrfDev', isPublished: true })
//     console.log(courses)
// }
// getCourses()

module.exports = Course