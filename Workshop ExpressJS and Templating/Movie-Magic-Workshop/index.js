const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
const routes = require('./routes');
const port = 80;

app.use(routes)

// Set the view engine to handlebars
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');



// setting the folder where the static files are located
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
