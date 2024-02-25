const express = require('express');
const app = express();

const path = require('path');
const routes = require('./routes');
const configHandlebars = require('./config/configHandlebars');
const port = 80;

// setting the folder where the static files are located
// it has to be in order before app.use(routes) so the static files are served first before the 404 page
app.use(express.static('public'))

app.use(routes)

 
configHandlebars(app);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
