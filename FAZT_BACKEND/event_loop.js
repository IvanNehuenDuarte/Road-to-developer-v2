const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to server')
        return res.end()
    }

    if (req.url === '/about') {

        //Blocking code
        for (let i = 0; i < 100000; i++) {
            console.log(Math.random() * i);
            
        }
        return res.end('About page')
    }

    res.end('Not found')
})

server.listen(3000)

console.log('server on port 3000');