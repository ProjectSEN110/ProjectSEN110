 
import React, { useState, useEffect } from 'react';

function App() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem('notes')) || [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, note]);
      setNote('');
    }

  };

  const deleteNote = (i) => {
    setNotes(notes.filter((_, index) => index !== i));
  }
  return (
    <div style={{ padding: '100px' }}>
      <h2>Notes App</h2>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write a note..."
      />
      <br />
      <button onClick={addNote}>Add Note</button>
      <ul>
        {notes.map((n, i) => (

          <li key={i}>
            {n} <button onClick={() => deleteNote(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
