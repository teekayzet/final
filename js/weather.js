function getWeather() {
    const apiKey = 'afec42bc2c2331ca0e28c0172324f903';
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const humidityElement = document.querySelector('humidity-value');
    const windElement = document.querySelector('wind-value');
    const weatherIcon = document.querySelector('weatherIcon');
  
    

    if (!cityInput.value) {
      alert('Please enter a city name.');
      return;
    }
  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
        /*cityInput.innerHTML = `${data.name}, ${data.sys.country}`*/
        if (data.cod === '404') {
          alert('City not found. Please enter a valid city name.');
          return;
        }
    
        descriptionElement.textContent = data.weather[0].description;
        locationElement.textContent = data.name;
        temperatureElement.textContent = `${Math.round(data.main.temp)}°C`.style.backgroundcolor.red;
        humidityElement = data.main.humidity[0].weatherInfo;
        humidityElement.textContent = `${data.main.humidity}%`;
        windElement.textContent = `${data.wind.speed} m/s`;
  
      });

      
  }
getWeather();
  