import { join } from 'path'
import express from 'express'
import socketIO from 'socket.io'
import logger from 'morgan'
// port number 
const PORT = 5000


const app = express()

// setting up view engine
app.set('view engine','pug') 

// setting views folder and importing join property from path
app.set('views', join(__dirname, 'views'))

app.use(logger('dev'))

//setting up static files
app.use(express.static(join(__dirname,'static')))

// home link
app.get('/', (req, res) => res.render('home'))
 
// setting up server
const handleListening = () => console.log(`✔ Server Running: http://localhost:${PORT}`)

const server = app.listen(PORT, handleListening);

// putting WS over HTTP server
const io = socketIO(server)

io.on('connection',(socket) => console.log(socket))