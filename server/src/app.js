const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('combined'))

// test endpoint
app.get('/', (req, res) => {
  res.send(`Hello world!`)
})


app.post('/register', (req, res) => {
  res.send(`${req.body.email} is successfully registered with us. Have fun!`)
})

app.listen(process.env.PORT || 8081, () => {
  console.log(`Backend server for tab tracker is running`)
})
