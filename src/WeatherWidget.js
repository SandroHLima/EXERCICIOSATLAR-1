import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WidgetContainer, WeatherCard, Loading, WidgetInput, WidgetButton } from './components/StyledComponents';

const WeatherWidget = ({ apiKey }) => {
    const [city, setCity] = useState('London');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchWeather = async (cityName) => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
            );
            setWeather(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error.response ? error.response.data : error.message);
            setWeather(null);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (apiKey) {
            fetchWeather(city);
        }
    }, [city, apiKey]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (city.trim()) {
            fetchWeather(city);
        }
    };

    return (
        <WidgetContainer>
            <form onSubmit={handleSearch}>
                <WidgetInput
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city..."
                />
                <WidgetButton type="submit">Search</WidgetButton>
            </form>
            {loading ? (
                <Loading>Loading weather...</Loading>
            ) : weather ? (
                <WeatherCard>
                    <h3>{weather.name}</h3>
                    <p>{weather.main.temp}°C</p>
                    <p>{weather.weather[0].description}</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                </WeatherCard>
            ) : (
                <p>No weather data available.</p>
            )}
        </WidgetContainer>
    );
};

export default WeatherWidget;