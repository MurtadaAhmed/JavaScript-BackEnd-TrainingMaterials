const http = require('http');

const server = http.createServer((req, res) => {
    console.log('server is running')
    res.write("HELLO")
    res.end()
    url = new URL(req.url, `http://${req.headers.host}`)
    console.log(url)
})

server.listen(5050)

