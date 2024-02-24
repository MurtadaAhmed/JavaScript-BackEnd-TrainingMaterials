const express = require('express'); // import express
const app = express(); // create an instance of express
const path = require('path'); // import path module
const handlebars = require('express-handlebars'); // import handlebars
const port = 80

const cats = [
    {
    name: "Fluffy",
    age: 8,
    breed: "Persian"
    },
    {
    name: "Whiskers",
    age: 2,
    breed: "Siamese"
    },
    {
    name: "Socks",
    age: 5,
    breed: "Ragdoll"
    }
]

app.engine("handlebars", handlebars.engine()); // set handlebars as the view engine
app.set("view engine", "handlebars"); // set handlebars as the view engine

// get request for home page
app.get('/', (req, res) => {
    res.render('home', {cats})
}) 

// get request for about page
app.get('/about', (req, res) => {
    res.header({
        'Content-Type': 'text/html',
    })
    res.send('About Us');
})

// params for usernames
app.get('/user/:username', (req, res) => {

    currentUser = req.params.username;
    res.header({
        'Content-Type': 'text/html',
    })
    res.send(`Hello, ${currentUser}`);
})

// download a file
app.get('/download', (req, res) => {
    filePath = path.join(__dirname, 'files', 'sample.txt');
    res.download(filePath);
})

// add static files, where static is the name of the folder
app.use(express.static('static'))

// port to listen on
app.listen(port)
console.log(`Server is running on port ${port}. Access it at http://localhost:${port}`)
