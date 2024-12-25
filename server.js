const http = require('http')
const fs = require('fs')
const path = require('path')
const querystring = require('querystring')

const PORT = 8081

const server = http.createServer((req, res) => {
    if (req.method == 'GET') {
        switch (req.url) {
            case '/': {
                fs.readFile(path.join(__dirname, 'public','index.html'), 'utf-8', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the Home page')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.end(data)
                })
                break
            }
            case '/login': {
                fs.readFile(path.join(__dirname, 'public','login.html'), 'utf-8', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the login page')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.end(data)
                })
                break
            }
            case '/dashboard': {
                fs.readFile(path.join(__dirname, 'public','dashboard.html'), 'utf-8', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the dashboard page')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.end(data)
                })
                break
            }
            case '/register': {
                fs.readFile(path.join(__dirname, 'public','register.html'), 'utf-8', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the registration page')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.end(data)
                })
                break
            }

            case '/hotel1': {
                fs.readFile(path.join(__dirname, 'public','hotel1.html'), 'utf-8', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading this page.')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.end(data)
                })
                break
            }

            case '/hotel2': {
                fs.readFile(path.join(__dirname, 'public','hotel2.html'), 'utf-8', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading this page.')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.end(data)
                })
                break
            }

            case '/hotel3': {
                fs.readFile(path.join(__dirname, 'public','hotel3.html'), 'utf-8', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading this page.')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.end(data)
                })
                break
            }

            case '/hotel4': {
                fs.readFile(path.join(__dirname, 'public','hotel4.html'), 'utf-8', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading this page.')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.end(data)
                })
                break
            }

            case '/hotel5': {
                fs.readFile(path.join(__dirname, 'public','hotel5.html'), 'utf-8', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading this page.')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.end(data)
                })
                break
            }

            case '/hotel6': {
                fs.readFile(path.join(__dirname, 'public','hotel6.html'), 'utf-8', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading this page.')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.end(data)
                })
                break
            }

            case '/hotel7': {
                fs.readFile(path.join(__dirname, 'public','hotel7.html'), 'utf-8', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error loading this page.')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.end(data)
                })
                break
            }

            case '/hotel8': {
                fs.readFile(path.join(__dirname, 'public','hotel8.html'), 'utf-8', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading this page.')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.end(data)
                })
                break
            }

            case '/hotel9': {
                fs.readFile(path.join(__dirname, 'public','hotel9.html'), 'utf-8', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading this page.')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.end(data)
                })
                break
            }

            case '/hotel1.png': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel1.png'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel1ex1.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel1ex1.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }


            case '/hotel1ex2.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel1ex2.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }


            case '/hotel1pool1.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotel1pool1.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel1pool2.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotel1pool2.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel1room1.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotel1room1.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel1room2.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotel1room2.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel1view1.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotel1view1.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel1view2.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotel1view2.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel1benefit1.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotel1benefit1.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel1benefit2.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotel1benefit2.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel1meeting1.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotel1meeting1.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel1meeting2.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotel1meeting2.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel2.png': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel2.png'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel2ex1.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel2ex1.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel2ex2.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel2ex2.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel2pool1.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel2pool1.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel2pool2.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel2pool2.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel2room1.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel2room1.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel2room2.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel2room2.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel2view1.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel2view1.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel2view2.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel2view2.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel2int1.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel2int1.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel2int2.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel2int2.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel2dinning1.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel2dinning1.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel2dinning2.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel2dinning2.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel3.png': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel3.png'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel3ex1.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel3ex1.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel3ex2.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel3ex2.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel3service1.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel3service1.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel3service2.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel3service2.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel3room1.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel3room1.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel3room2.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel3room2.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel3view1.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel3view.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel3view2.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel3view1.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel3int1.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel3int1.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel3int2.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel3int2.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel3dinning1.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel3dinning1.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel3dinning2.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel3dinning2.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel4.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel4.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotelin4.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotelin4.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotelin4ii.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotelin4ii.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotelpool4.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotelpool4.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotelpoolii4.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotelpoolii4.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotelres4.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotelres4.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotelresii4.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotelresii4.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel5.png': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel5.png'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotelin5.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotelin5.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotelin5ii.png': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotelin5ii.png'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel5gar.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotel5gar.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel5garii.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotel5garii.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel5res.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotel5res.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel5resii.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotel5resii.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel6.png': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel6.png'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel6in.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotel6in.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel6inii.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/hotel6inii.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/seaview.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/seaview.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/seaviewii.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/seaviewii.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/tajdin.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/tajdin.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/tajdinii.jpg': {
                fs.readFile(path.join(__dirname, 'public', 'images', '/tajdinii.jpg'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel7.png': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel7.png'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel8.png': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel8.png'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            case '/hotel9.png': {
                fs.readFile(path.join(__dirname, 'public', 'images', 'hotel9.png'), (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' })
                        res.end('Error reading the image')
                        return
                    }
                    res.writeHead(200, { 'Content-Type': 'image/png' })
                    res.end(data)
                })
                break
            }

            default: {
                res.writeHead(404, { 'Content-Type': 'text/plain' })
                res.end('Not Found')
            }
        }
    }
    else if (req.method === 'POST') {
        switch (req.url) {
            case '/login': {
                let body = ''
                req.on('data', chunk => {
                    body += chunk.toString()
                })

                req.on('end', () => {
                    const { username, password } = querystring.parse(body)

                    // Read the users from the users.json file
                    fs.readFile(path.join(__dirname, 'users.json'), 'utf-8', (err, data) => {
                        if (err) {
                            res.writeHead(500, { 'Content-Type': 'text/plain' })
                            res.end('Error reading user data')
                            return
                        }

                        // Parse the users data
                        const users = JSON.parse(data)

                        // Authenticate the user by checking the username and password
                        const user = users.find(u => u.username === username && u.password === password)

                        if (user) {
                            // If user is found, redirect to the dashboard
                            res.writeHead(302, { 'Location': '/dashboard' })
                            res.end()
                        } else {
                            // If user is not found, redirect to the register page
                            res.writeHead(302, { 'Location': '/register' })
                            res.end()
                        }
                    })
                })
                break
            }
            case '/register': {
                let body = ''
                req.on('data', chunk => {
                    body += chunk.toString()
                })

                req.on('end', () => {
                    const { username, password } = querystring.parse(body)
                    const userData = { username, password }

                    // Read existing users from users.json or create an empty array if file doesn't exist
                    fs.readFile(path.join(__dirname, 'users.json'), 'utf-8', (err, data) => {
                        let users = []

                        if (!err) {
                            users = JSON.parse(data)
                        }

                        // Save new user to the users array
                        users.push(userData)

                        // Write the updated users array to users.json
                        fs.writeFile(path.join(__dirname, 'users.json'), JSON.stringify(users, null, 2), (err) => {
                            if (err) {
                                res.writeHead(500, { 'Content-Type': 'text/plain' })
                                res.end('Error saving registration data')
                                return
                            }
                            res.writeHead(302, { 'Location': '/' })
                            res.end()
                        })
                    })
                })
                break
            }
            default: {
                res.writeHead(404, { 'Content-Type': 'text/plain' })
                res.end('Not Found')
            }
        }
    }
})

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
