const http = require('http');
const homeTemplate = require('./views/home/index');
const css = require('./content/styles/site.css.js');
const addCat = require('./views/addCat.html.js');
const port = 80;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write(homeTemplate);
    } else if (req.url === "/content/styles/site.css") {
        res.writeHead(200, {
            'content-type': 'text/css'
        })
        res.write(css);

    } else if (req.url === "/cats/add-cat") {
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write(addCat);
    } else {
        res.writeHead(404, {
            'content-type': 'text/html'
        })
        res.write("<h1>404 Not Found</h1>");
    }

    res.end();
})

server.listen(port)