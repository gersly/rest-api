const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.get('/', (req, res) => res.send('Hello World!'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.post('/messages', (req, res) => {
    console.log("this is the request body",req.body)
    const message = { "message" : "Message received loud and clear"}
        res.json(message)

})


app.get('/messages', (req, res) => {
  
})
app.listen(port, () => console.log(`Listening on port ${port}!`))