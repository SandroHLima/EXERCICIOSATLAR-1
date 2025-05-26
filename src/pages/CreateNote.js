import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Textarea, Button } from "../components/StyledComponents";

function CreateNote({ setNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return alert("Title and content are required");
    const newNote = {
      id: Date.now(),
      title,
      content,
      tag,
    };
    setNotes((prev) => [...prev, newNote]);
    navigate("/");
  };

  return (
    <div>
      <h2>Criar Nota</h2>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Tag (optional)"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <Button onClick={handleSubmit}>Guardar Nota</Button>
      <Link to="/">
        <Button>Cancelar</Button>
      </Link>
    </div>
  );
}

export default CreateNote;
