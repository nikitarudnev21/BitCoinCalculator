document.querySelector('.form').addEventListener('submit', e => {
    e.preventDefault()
    axios.post('/', {
        num1: document.querySelector('#num1').value,
        num2: document.querySelector('#num2').value
    })
        .then(response => document.querySelector('.result').innerHTML = "Result: " + response.data.result)
        .catch((error) => console.error('Error:', error))
})
let EUR_PRICE = 0
let USD_PRICE = 0
const quantityEl = document.querySelector('#quantity')
axios.get('https://api.coindesk.com/v1/bpi/currentprice/eur.json')
.then(response=>{
    EUR_PRICE = response.data.bpi.EUR.rate;
    USD_PRICE = response.data.bpi.USD.rate;
    const eurResult = parseInt(parseFloat(EUR_PRICE.toString().replaceAll(',',''))*quantityEl.value);
    const usdResult = parseInt(parseFloat(USD_PRICE.toString().replaceAll(',',''))*quantityEl.value);
    document.querySelector(".resulteur").innerHTML = quantityEl.value +" bitcoin =" + eurResult + " EUR";
    document.querySelector(".resultusd").innerHTML = quantityEl.value +" bitcoin =" + usdResult + " USD";
})

quantityEl.addEventListener('change', e=> {
    const eurResult = parseInt(parseFloat(EUR_PRICE.toString().replaceAll(',',''))*e.target.value);
    const usdResult = parseInt(parseFloat(USD_PRICE.toString().replaceAll(',',''))*e.target.value);
    document.querySelector(".resulteur").innerHTML = e.target.value +" bitcoin =" + eurResult + " EUR";
    document.querySelector(".resultusd").innerHTML = e.target.value +" bitcoin =" + usdResult + " USD";
});

axios.get('https://restcountries.eu/rest/v2/name/estonia?fullText=true')
.then(response=> {
   const res = response.data[0];
   document.querySelector(".estoniainfo").innerHTML = `
   Name: ${res.name}
   <br>
   Capital: ${res.capital}
   <br>
   Timezone: ${res.timezones[0]}
   <br>
   Currency: ${res.currencies[0].name}
   <br>
   Regional Block - EU: ${res.regionalBlocs[0].name}
   <br>
   Population: ${res.population} people
   <br>
   Region: ${res.region} 
   <br>
   Subregion: ${res.subregion} 
   <br>
   <img src = "${res.flag}" style="width: 150px; height: 150px;">
   `;
})