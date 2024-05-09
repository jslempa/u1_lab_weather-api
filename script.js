
const apiKey = 'edd21ec135e34374ae1132240240905'
const input = document.querySelector('#textInput')
const button = document.querySelector('#submitButton')
const output = document.querySelector('#output')

async function getInfo() {
    const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input.value}&aqi=no`)
    console.log(res.data)

    // let iconUrl = res.data.current.condition.icon
    // icon.setAttribute(`src`, iconUrl)
    
    output.innerHTML = `
        <h2>${res.data.location.name}, ${res.data.location.country}</h2>
        <img src=${res.data.current.condition.icon}>
        <h3>${res.data.current.condition.text}</h3>
        <p>Temperature: ${res.data.current.temp_f}°F</p>
        <p>Feels Like: ${res.data.current.feelslike_f}°F</p>
        <p>Wind: ${res.data.current.wind_mph} mph</p>
        <p>Humidity: ${res.data.current.humidity}%</p>
    `

}

button.addEventListener('click', getInfo)