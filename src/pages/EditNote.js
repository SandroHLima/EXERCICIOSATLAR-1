import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Input, Textarea, Button } from "../components/StyledComponents";

function EditNote({ notes, setNotes }) {
  const { id } = useParams();
  const note = notes.find((n) => n.id === Number(id));
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");
  const [tag, setTag] = useState(note?.tag || "");
  const navigate = useNavigate();

  useEffect(() => {
    if (!note) navigate("/");
  }, [note, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return alert("Title and content are required");
    setNotes((prev) =>
      prev.map((n) => (n.id === Number(id) ? { ...n, title, content, tag } : n))
    );
    navigate("/");
  };

  return (
    <div>
      <h2>Editar Note</h2>
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
      <Button onClick={handleSubmit}>Guardar Mudanças</Button>
      <Link to="/">
        <Button>Cancelar</Button>
      </Link>
    </div>
  );
}

export default EditNote;
