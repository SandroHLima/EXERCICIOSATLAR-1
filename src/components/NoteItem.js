import React, { useState } from 'react';
import { Note, Button, Input } from './StyledComponents';

function NoteItem({ note, editNote, toggleEdit, deleteNote }) {
  const [editText, setEditText] = useState(note.text);

  const handleEditSubmit = () => {
    if (editText.trim()) {
      editNote(note.id, editText);
    }
  };

  return (
    <Note>
      {note.editing ? (
        <>
          <Input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <Button onClick={handleEditSubmit}>Save</Button>
          <Button danger onClick={() => toggleEdit(note.id)}>Cancel</Button>
        </>
      ) : (
        <>
          <div>
            <span>{note.text}</span>
            <p style={{ fontSize: '0.8em', color: '#666' }}>({note.category})</p>
          </div>
          <div>
            <Button onClick={() => toggleEdit(note.id)}>Edit</Button>
            <Button danger onClick={() => deleteNote(note.id)}>Delete</Button>
          </div>
        </>
      )}
    </Note>
  );
}

export default NoteItem;