const inputValue = document.getElementById('input-value');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const weatherStatus = document.getElementById('weather-status')

const button = document.getElementById('button').addEventListener('click', function () {
    function weatherTemperature(){
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+ inputValue.value +'&appid=c9298e918c1298c3bb7543bfa46c741f')
        .then(res =>res.json())
        .then(data => {
            const temp= data['main'] ['temp'];
            const weather= data['weather'] ['0'] ['main'];
            cityName.innerHTML= inputValue.value;
            temperature.innerHTML = Math.round(temp-273.15).toFixed(2);
            weatherStatus.innerHTML = weather;   
        })
        .catch(err => alert('Wrong city name'));
    }
    weatherTemperature()
})