import React, { useState } from 'react';
import NoteItem from './components/NoteItem';
import { Container, Input, Button, Select, NoteList, FilterContainer } from './components/StyledComponents';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [category, setCategory] = useState('Work');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const addNote = (e) => {
    e.preventDefault();
    if (newNote.trim()) {
      setNotes([...notes, { id: Date.now(), text: newNote, category, editing: false }]);
      setNewNote('');
    }
  };

  const editNote = (id, newText) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, text: newText, editing: false } : note
    ));
  };

  const toggleEdit = (id) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, editing: !note.editing } : note
    ));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.text.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || note.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container>
      <h1>Notes App</h1>
      <form onSubmit={addNote}>
        <Input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Add a new note..."
        />
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Ideas">Ideas</option>
        </Select>
        <Button type="submit">Add Note</Button>
      </form>
      <FilterContainer>
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search notes..."
        />
        <Select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Ideas">Ideas</option>
        </Select>
      </FilterContainer>
      <NoteList>
        {filteredNotes.length === 0 ? (
          <p>No notes match your search or filter. Add one above!</p>
        ) : (
          filteredNotes.map(note => (
            <NoteItem
              key={note.id}
              note={note}
              editNote={editNote}
              toggleEdit={toggleEdit}
              deleteNote={deleteNote}
            />
          ))
        )}
      </NoteList>
    </Container>
  );
}

export default App;