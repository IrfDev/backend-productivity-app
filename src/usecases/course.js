const Course = require('.,/models/courses')

asyn

function createCourse(course) {
    try {
        course.validate((err) => {
            if (err) {

            }
        })
    } catch (ex) {
        console.log(ex.message)
    }
}

async function getCourses() {
    let courses = await Course
        .find({ author: 'IrfDev', isPublished: true })
    console.log(courses)
}
// If you recive an input from the user
async function updateCourse(id) {
    const result = await Course.findByIdAndUpdate(id, {
        $set: {
            author: 'Mosh',
            isPublished: false,
        }
    }, { new: true });
    console.log(result)
}

async function deleteCourse(id) {
    const result = await Course.delete({ _id: id })
    console.log(result)
}

// The Query first approach to update a course

module.exports = {
    getCourses,
}