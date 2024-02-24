const http = require('http');
const fs = require('fs');
const port = 80;
const views = {
    home: "./views/home/index.html",
    css: "./content/styles/site.css",
    addCat: "./views/addCat.html",
    addBreed: "./views/addBreed.html"
}
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile(views.home, {encoding: "utf-8"}, (err, data) => {
            if (err) {
                console.log(err);
                return res.end();
            }
            res.writeHead(200, {
                'content-type': 'text/html'
            })
            console.log("Heloooooooooooooo");
            res.write(data);
            res.end();
            console.log("response ended")
            
        }) 
        
    } else if (req.url ==="/content/styles/site.css"){
        fs.readFile(views.css , {encoding: "utf-8"}, (err, data) => {
            if (err) {
                console.log(err);
                return res.end();
            }
            res.writeHead(200, {
                'content-type': 'text/css'
            })
            res.write(data);
            res.end();
        }) 
    } else if (req.url === "/cats/add-cat") {
        fs.readFile(views.addCat, {encoding: "utf-8"}, (err, data) => {
            if (err) {
                console.log(err);
                return res.end();
            }
            res.writeHead(200, {
                'content-type': 'text/html'
            })
            res.write(data);
            res.end();
        }) 
    } else if (req.url === "/cats/add-breed") {
        fs.readFile(views.addBreed, {encoding: "utf-8"}, (err, data) => {
            if (err) {
                console.log(err);
                return res.end();
            }
            res.writeHead(200, {
                'content-type': 'text/html'
            })
            res.write(data);
            res.end();
        }) 
    }
    
})

server.listen(port)