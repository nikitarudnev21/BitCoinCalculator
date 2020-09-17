const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
const PORT = process.env.PORT || 3002

app.get('/', (req, res) => {
    res.sendfile(path.resolve('index.html'))
})

app.post('/', (req, res) => {
    const num1 = parseInt(req.body.num1)
    const num2 = parseInt(req.body.num2)
    console.log('Number 1', req.body.num1)
    console.log('Number 2',  req.body.num1)
    const result = num1 + num2
    res.json({result})
})

app.listen(PORT, () => {
    console.log("Server is running on Port 3002")
})