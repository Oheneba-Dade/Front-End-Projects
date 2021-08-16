const input = document.querySelector('input');
const btn = document.querySelector('button');
const main = document.querySelector('main');
const APIKey = 'b42cdbcf7b6d473d94c85730211308';
const body = document.querySelector('body');


btn.addEventListener('click', async () => {
    //remove background image
    body.classList.remove('imageToggle');
    //reset the page after each new entry
    main.innerHTML = '';
    const location = input.value;
    const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${location}`);
    displayInfo(res.data);
    //reset the input box
    input.value = '';
})

function displayInfo(place) {
    //retrieve the image name from the API request
    const imgPath = place.current.condition.icon.slice(-7)

    const conditionImage = document.createElement('img');
    const city = document.createElement('p');
    const country = document.createElement('p');
    const temperature = document.createElement('p');
    const condition = document.createElement('p');
    const windSpeed = document.createElement('p');
    
    main.append(conditionImage, city, country, temperature, condition, windSpeed)
    
    conditionImage.src = `weather/64x64/${place.current.is_day}/${imgPath}`
    city.textContent = `City - ${place.location.name}`;
    country.textContent = `Country - ${place.location.country}`;
    temperature.textContent = `Temperature (Degrees Celsius) - ${place.current.temp_c}`;
    condition.textContent = `Condition - ${place.current.condition.text}`;
    windSpeed.textContent = `Wind Speed (Kilometres Per Hour) - ${place.current.wind_kph}`;
    
    if (place.current.is_day === 0) {
        document.body.style.backgroundColor = 'rgb(50, 71, 105)';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'rgb(242, 242, 228)';
        document.body.style.color = 'black'
    }
}
