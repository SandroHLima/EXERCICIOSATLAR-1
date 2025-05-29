import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PhotoCard, Button, Select } from '../components/StyledComponents';
import PhotoCardComponent from '../components/PhotoCard';

function Gallery({ userPhotos, setUserPhotos, categoryFilter, setCategoryFilter }) {
  const [apiPhotos, setApiPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showApiPhotos, setShowApiPhotos] = useState(true);

  // Fetch photos from JSONPlaceholder API
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then((response) => {
        setApiPhotos(response.data.map(photo => ({ ...photo, category: 'Other' }))); // Default category
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
        setLoading(false);
      });
  }, []);

  // Combine API photos and user-uploaded photos based on toggle
  const allPhotos = [...(showApiPhotos ? apiPhotos : []), ...userPhotos].filter(photo => {
    if (categoryFilter === 'all') return true;
    return photo.category === categoryFilter;
  });

  return (
    <div>
      <h2>Gallery</h2>
      <div>
        <Button onClick={() => setShowApiPhotos(prev => !prev)}>
          {showApiPhotos ? 'Hide API Photos' : 'Show API Photos'}
        </Button>
        <Select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="Nature">Nature</option>
          <option value="People">People</option>
          <option value="Other">Other</option>
        </Select>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : allPhotos.length === 0 ? (
        <p>No photos to display.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '10px',
          }}
        >
          {allPhotos.map((photo) => (
            <PhotoCard key={photo.id}>
              <PhotoCardComponent
                photo={photo}
                setUserPhotos={setUserPhotos}
                isUserPhoto={userPhotos.some((p) => p.id === photo.id)}
              />
            </PhotoCard>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;