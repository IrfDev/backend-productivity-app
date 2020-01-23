const express = require('express')
const router = express.Router()
const Joi = require('joi');

const courses = [
    { id: 1, name: 'asdasd1' },
    { id: 2, name: 'asdasd2' },
    { id: 3, name: 'asdasd3' },
]

router.get('/', (req, res) => {
    res.send(courses)
})

router.get('/:id', (req, res) => {
    let courseId = req.params.id
    let course = courses.find(c => c.id === parseInt(courseId))
    if (!course) res.status(404).send(`The course with the ${courseId} id wasn't found`)
    res.send(course)
})

router.post('/', (req, res) => {
    validateCourse(req.body)

    if (error) {
        res.status(400).send(error.details[0].message)
        return
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };
    courses.push(course);
    res.send(course)
})

router.put('/:id', (req, res) => {
    let courseId = req.params.id
    let course = courses.find(c => c.id === parseInt(courseId))
    if (!course) {
        return res.status(404).send(`The course with the ${courseId} id wasn't found`)
    }
    const { error } = validateCourse(req.body)

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    course.name = req.body.name
    res.send(course)
})

router.delete(`/:id`, (req, res) => {
    let courseId = req.params.id
    let course = courses.find(c => c.id === parseInt(courseId))
    if (!course) res.status(404).send(`The course with the ${courseId} id wasn't found`)

    const index = courses.indexOf(courseId)
    courses.splice(index, 1)
    res.send(`Deleted succesfully the ${courseId} course`)
})

function validateCourse(course)  {
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(course, schema)
}


module.exports = router