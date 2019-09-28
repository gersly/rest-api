const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const port = 3000

let messagesReceived = 0;

app.post('/messages', (req, res) => {
    let inputMsg = req.body
    if (messagesReceived >= 5) {
        res.status(429).send("Too many requests")
    } else {
        if (inputMsg.hasOwnProperty('text')) {
            messagesReceived++;
            res.json({
                message: "Message received loud and clear"
            })
        } else {
            res.status(400).send("Bad Request")
        }
    }


})





app.listen(port, () => console.log(`Listening on port ${port}!`))