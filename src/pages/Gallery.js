import React, { useState, useEffect } from "react";
import axios from "axios";
import { PhotoCard } from "../components/StyledComponents";
import PhotoCardComponent from "../components/PhotoCard";

function Gallery({ userPhotos, setUserPhotos }) {
  const [apiPhotos, setApiPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // Combine API photos and user-uploaded photos
  const allPhotos = [...apiPhotos, ...userPhotos];

  return (
    <div>
      <h2>Gallery</h2>
      {loading ? (
        <p>Loading...</p>
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
