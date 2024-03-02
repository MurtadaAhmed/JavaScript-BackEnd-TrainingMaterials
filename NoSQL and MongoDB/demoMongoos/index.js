const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/testDataBase")
.then(() => console.log("DB Connection Successful"))

const courseSchema = new mongoose.Schema({
    name: String,
})

courseSchema.methods.getCourse = function() {
    return `Course Name: ${this.name}, course id: ${this._id}`

}

courseSchema.virtual('description').get(function() {
    return `Description Course Name: ${this.name}, Description course id: ${this._id}`
})

const Course = mongoose.model("course", courseSchema)

Course.findOne({name: "Python"}).select("name")


// Course.find().then(courses =>{
//     courses.forEach(course => {
//         console.log(course.getCourse())
//     })
// })
// Course.find().then(courses => {
//     courses.forEach(course => {
//         console.log(course.description)
//     })
// })

// Course.findOne().then(course => {
//     console.log(`One course is: ${course}`)
// })

// Course.findById("65df86a4202b3f3b43ddbebc").then(course => {
//     console.log(`Course by id is: ${course}`)

// })

// Course.updateOne({_id: "65df7c6fcbcc0766e2db4ead"}, {$set: {name: "New Course Name"}})
// .then(course => {console.log(course)})
 
// Course.updateMany({name: "New Course Name"}, {$set: {name: "New Course Name2"}})
// .then(course => console.log(course))  
 
// Course.findByIdAndUpdate("65df7c6fcbcc0766e2db4ead", {$set: {name: "New Course Name3"}})
// .then(course => console.log(course)) 

// Course.findByIdAndDelete("65df7c4d5dee7f2aa3a83774")
// .then(course => console.log(course)) 

// Course.deleteOne({name: "Express.js"})
// .then(course => console.log(course))

// Course.deleteMany({name: "Node.js"})
// .then(course => console.log(course)) 



// Alternative way
// Course.create({
//     name: "Node.js"
// }).then(date => console.log(date))


// const newcourse = new Course({
//     name: "Java Script"
// })

// newcourse.save().then(() => {
//     console.log("Course Saved!") 
// })

// Course.find().then((data) => {
//     console.log(data)
// })