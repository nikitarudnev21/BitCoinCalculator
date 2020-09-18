const express = require('express')
const path = require('path')
const app = express()
/*const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))*/
const PORT = process.env.PORT || 3002

app.use(express.json({ extended: true }))

app.use("/scr", express.static(__dirname + '/static/scripts'));
app.use("/node_modules/axios/", express.static(__dirname + '/node_modules/axios/'))
app.get('/', (req, res) => {
    res.sendFile(path.resolve('static/client/index.html'))
})

app.post('/', (req, res) => {
    const result = parseInt(req.body.num1) + parseInt(req.body.num2)
    res.json({ result })
})

app.listen(PORT, () => {
    console.log("Server is running on Port 3002")
})