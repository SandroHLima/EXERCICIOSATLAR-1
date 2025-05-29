import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Container, Button } from './components/StyledComponents';
import Gallery from './pages/Gallery';
import InsertPhoto from './pages/InsertPhoto';

function App() {
  const [userPhotos, setUserPhotos] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Load user-uploaded photos from localStorage
  useEffect(() => {
    const savedPhotos = JSON.parse(localStorage.getItem('userPhotos') || '[]');
    setUserPhotos(savedPhotos);
  }, []);

  // Save user-uploaded photos to localStorage
  useEffect(() => {
    localStorage.setItem('userPhotos', JSON.stringify(userPhotos));
  }, [userPhotos]);

  return (
    <Container>
      <h1>Photo Gallery</h1>
      <nav>
        <Link to="/">
          <Button>Gallery</Button>
        </Link>
        <Link to="/insert">
          <Button>Upload Photo</Button>
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Gallery userPhotos={userPhotos} setUserPhotos={setUserPhotos} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />}
        />
        <Route
          path="/insert"
          element={<InsertPhoto setUserPhotos={setUserPhotos} />}
        />
      </Routes>
    </Container>
  );
}

export default App;