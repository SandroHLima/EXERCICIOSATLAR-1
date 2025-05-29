import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, SearchBar, Input, Button, WeatherCard, Loading } from './components/StyledComponents';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_KEY = '9297720310e64d37fa054b802c765225'; // Hardcoded for now

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error.response ? error.response.data : error.message);
      setWeather(null);
      alert('Failed to fetch weather data. Please check the city name or try again later.');
    }
    setLoading(false);
  };

  useEffect(() => {
    // Fetch default city on load (e.g., London)
    setCity('London');
    fetchWeather();
  }, [API_KEY]);

  return (
    <Container>
      <h1>Weather App</h1>
      <SearchBar>
        <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
        />
        <Button onClick={fetchWeather}>Search</Button>
      </SearchBar>
      {loading ? (
        <Loading>Loading weather data...</Loading>
      ) : weather ? (
        <WeatherCard>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Conditions: {weather.weather[0].description}</p>
        </WeatherCard>
      ) : (
        <p>No weather data available. Try searching a city!</p>
      )}
    </Container>
  );
}

export default App;