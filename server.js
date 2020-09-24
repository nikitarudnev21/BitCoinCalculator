const express = require('express')
const path = require('path')
const app = express()
const axios = require('axios').default;
/*const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))*/
const PORT = process.env.PORT || 3002

app.use(express.json({ extended: true }))

app.use("/scr", express.static(__dirname + '/static/scripts'))
app.use("/stl", express.static(__dirname + '/static/stypes'))


app.get('/', (req, res) => {
    const URL = "https://api.coindesk.com/v1/bpi/currentprice/eur.json";
    axios.get(URL).then(response=>{
    /*    const disclaimer = response.data.disclaimer;
        const eurRates = response.data.bpi.EUR.rate;
        const eurCode = response.data.bpi.EUR.code;
        const usdRates = response.data.bpi.USD.rate;
        const usdCode = response.data.bpi.USD.code;
        res.write();
        res.send();*/
    }).catch(err=>console.log(err))
    res.sendFile(path.resolve('static/client/index.html'))
})

app.post('/', (req, res) => {
    const result = parseInt(req.body.num1) + parseInt(req.body.num2)
    res.json({ result })
})

app.listen(PORT, () => {
    console.log("Server is running on Port 3002")
})