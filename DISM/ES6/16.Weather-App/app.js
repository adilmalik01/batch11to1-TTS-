let button = document.querySelector('#getWeatherBtn');
let cityInput = document.querySelector('#cityInput');
let tempDisplay = document.querySelector('#temp');



button.addEventListener('click', async () => {
    console.log(cityInput.value);
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=e0f99c494c2ce394a18cc2fd3f100543&units=metric`;


    let response = await axios.get(API)

    tempDisplay.textContent = `Temperature in ${cityInput.value}: ${response.data.main.temp} °C`;



})