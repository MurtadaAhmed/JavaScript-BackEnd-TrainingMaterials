const {MongoClient} = require('mongodb');

const connectionString = 'mongodb://localhost:27017'
const client = new MongoClient(connectionString)

async function run() {
    const db = client.db("testDataBase")
    const collection = db.collection("courses")
    const courses = await collection.find({name: "MongoDB course"})
    const course = await courses.toArray()
    console.log(course)
}

run();