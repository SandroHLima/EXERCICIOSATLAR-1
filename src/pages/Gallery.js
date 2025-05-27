import React, { useState, useEffect } from "react";
import axios from "axios";
import { PhotoCard, Button } from "../components/StyledComponents";
import PhotoCardComponent from "../components/PhotoCard";

function Gallery({ userPhotos, setUserPhotos }) {
  const [apiPhotos, setApiPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showApiPhotos, setShowApiPhotos] = useState(true);

  // Fetch photos from JSONPlaceholder API
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((response) => {
        setApiPhotos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
        setLoading(false);
      });
  }, []);

  // Combine API photos and user-uploaded photos based on toggle
  const allPhotos = [...(showApiPhotos ? apiPhotos : []), ...userPhotos];

  return (
    <div>
      <h2>Gallery</h2>
      <Button onClick={() => setShowApiPhotos((prev) => !prev)}>
        {showApiPhotos ? "Hide API Photos" : "Show API Photos"}
      </Button>
      {loading ? (
        <p>Loading...</p>
      ) : allPhotos.length === 0 ? (
        <p>No photos to display.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "10px",
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
