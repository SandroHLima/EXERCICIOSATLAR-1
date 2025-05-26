import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Button } from "./components/StyledComponents";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";

function App() {
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotes(savedNotes);
  }, []);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <Container>
      <h1>Notes App</h1>
      <nav>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/create">
          <Button>Criar Nota</Button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home notes={notes} setNotes={setNotes} />} />
        <Route path="/create" element={<CreateNote setNotes={setNotes} />} />
        <Route
          path="/edit/:id"
          element={<EditNote notes={notes} setNotes={setNotes} />}
        />
      </Routes>
    </Container>
  );
}

export default App;
