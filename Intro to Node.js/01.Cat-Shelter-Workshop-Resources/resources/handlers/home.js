const url = require('url');
const fs = require('fs');
const path = require('path');
//const cats = require('../data/cats.json');
//const breeds = require('../data/breeds.json');

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    if (pathname === '/' && req.method === 'GET') {
        let filePath = path.normalize(
            path.join(__dirname, '../views/home/index.html')
        )
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('404 not found!');
                res.end();
                return;
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        })   
        } else {
            return true;
        }
    // Use the fs module to read the HTML file using the readFile function with the given filePath. If an error occurs send a 404 response code and some plain text message. If the specified file path name is correct send the HTML as a response with code 200 and content type "text/html".  
     
}

    