import React, { useState } from 'react';
import WeatherWidget from './WeatherWidget';
import { Container, SearchBar, Input, Button } from './components/StyledComponents';

function App() {
  const [city, setCity] = useState('London');
  const apiKey = '9297720310e64d37fa054b802c765225'; // Hardcoded for demo; use .env in production

  return (
    <Container>
      <h1>Weather Widget Demo</h1>
      <SearchBar>
        <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
        />
        <Button onClick={() => setCity(city)}>Search</Button>
      </SearchBar>
      <WeatherWidget city={city} apiKey={apiKey} />
    </Container>
  );
}

export default App;