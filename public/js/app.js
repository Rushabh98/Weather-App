const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const mylocation = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + mylocation).then((response) => {
        console.log(response)
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = 'Temperature is: ' + data.forecast.Temperature + ' degrees Celcius.\n' + 'Forecast is: ' + data.forecast.Description
            }
            console.log(data)
        })

    })
})