import React from "react";
import { Button } from "./StyledComponents";

function PhotoCard({ photo, setUserPhotos, isUserPhoto }) {
  const handleDelete = () => {
    if (isUserPhoto) {
      setUserPhotos((prev) => prev.filter((p) => p.id !== photo.id));
    }
  };

  return (
    <div>
      <img
        src={photo.url}
        alt={photo.title}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "5px",
        }}
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
