
document.querySelector('.form').addEventListener('submit', e => {
    e.preventDefault()
    axios.post('/', {
        num1: document.querySelector('#num1').value,
        num2: document.querySelector('#num2').value
    })
        .then(response => document.querySelector('.result').innerHTML = response.data.result)
        .catch((error) => console.error('Error:', error))
})