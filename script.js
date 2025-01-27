const weatherData = [
    { city: "Karachi", temperature: 32, condition: "Sunny", humidity: 60, windSpeed: 10 },
    { city: "Lahore", temperature: 28, condition: "Cloudy", humidity: 70, windSpeed: 8 },
    { city: "Islamabad", temperature: 25, condition: "Rainy", humidity: 80, windSpeed: 5 },
    { city: "Quetta", temperature: 20, condition: "Windy", humidity: 50, windSpeed: 15 },
    { city: "Peshawar", temperature: 27, condition: "Sunny", humidity: 65, windSpeed: 12 },
];

let isDarkMode = false;

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.querySelector('.toggle-theme').textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

function searchWeather() {
    const cityInput = document.getElementById('cityInput').value.trim();
    const weatherDetails = document.getElementById('weatherDetails');

    if (!cityInput) {
        weatherDetails.innerHTML = '<p>Please enter a city name.</p>';
        return;
    }

    const cityWeather = weatherData.find(data => data.city.toLowerCase() === cityInput.toLowerCase());

    if (cityWeather) {
        weatherDetails.innerHTML = `
            <h2>${cityWeather.city}</h2>
            <p>Temperature: ${cityWeather.temperature}°C</p>
            <p>Condition: ${cityWeather.condition}</p>
            <p>Humidity: ${cityWeather.humidity}%</p>
            <p>Wind Speed: ${cityWeather.windSpeed} km/h</p>
        `;
    } else {
        weatherDetails.innerHTML = '<p>City not found. Please try again.</p>';
    }
}