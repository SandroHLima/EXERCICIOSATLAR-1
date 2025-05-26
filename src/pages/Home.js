import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button, NoteCard } from "../components/StyledComponents";
import NoteCardComponent from "../components/NoteCard";

function Home({ notes, setNotes }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTag, setFilterTag] = useState("");

  // Filter notes based on search query and tag
  const filteredNotes = notes.filter(
    (note) =>
      (note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filterTag === "" || note.tag === filterTag)
  );

  // Get unique tags for filter dropdown
  const tags = [...new Set(notes.map((note) => note.tag).filter((tag) => tag))];

  return (
    <div>
      <Input
        type="text"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select onChange={(e) => setFilterTag(e.target.value)} value={filterTag}>
        <option value="">Todas Categorias</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      {filteredNotes.map((note) => (
        <NoteCard key={note.id}>
          <NoteCardComponent note={note} setNotes={setNotes} />
        </NoteCard>
      ))}
    </div>
  );
}

export default Home;
