import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./StyledComponents";

function NoteCard({ note, setNotes }) {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <p>
        <small>Categoria: {note.tag || "None"}</small>
      </p>
      <Link to={`/edit/${note.id}`}>
        <Button>Edit</Button>
      </Link>
      <Button
        danger
        onClick={() => setNotes((prev) => prev.filter((n) => n.id !== note.id))}
      >
        Apagar
      </Button>
    </div>
  );
}

export default NoteCard;
