import React, { useState } from "react";
import { Button } from "./StyledComponents";

function PhotoCard({ photo, setUserPhotos, isUserPhoto }) {
  const [imageError, setImageError] = useState(false);

  const handleDelete = () => {
    if (isUserPhoto) {
      setUserPhotos((prev) => prev.filter((p) => p.id !== photo.id));
    }
  };

  const fallbackImage = "https://via.placeholder.com/150?text=Fallback+Image";

  return (
    <div>
      <img
        src={imageError ? fallbackImage : photo.url}
        alt={photo.title}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "5px",
        }}
        onError={() => setImageError(true)}
      />
      <p>{photo.title}</p>
      {isUserPhoto && (
        <Button danger onClick={handleDelete}>
          Delete
        </Button>
      )}
    </div>
  );
}

export default PhotoCard;
