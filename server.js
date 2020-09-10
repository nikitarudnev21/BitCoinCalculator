const express = require('express')
const path = require('path')
const app = express()
const bodyPareser = require('body-parser')
app.use(bodyPareser.urlencoded({extended: true}))
const PORT = process.env.PORT || 3002

app.get('/', (req, res) => {
    res.sendfile(path.resolve('index.html'))
})

app.post('/', (req, res) => {
    console.log('Number 1', req.body.num1)
    console.log('Number 2',  req.body.num2)
    res.send('<b>'+(req.body.num1 +req.body.num2)+'</b>');
})

app.listen(PORT, () => {
    console.log("Server is running on Port 3002")
})