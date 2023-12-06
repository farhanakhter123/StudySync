import React, { useState } from 'react';
import './StickyNotes.css'; // Import the CSS file for styling

const Note = ({ id, text, onDelete, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [isNoteOpen, setNoteOpen] = useState(false);

  const handleEdit = () => {
    onEdit(id, editedText);
    setEditing(false);
  };

  const handleToggleNote = () => {
    setNoteOpen(!isNoteOpen);
  };

  return (
    <div className={`note ${isNoteOpen ? 'open' : 'closed'}`}>
      <div className="note-header" onClick={handleToggleNote}>
        <h3>{isNoteOpen ? 'Click to Close' : 'Click to Open'}</h3>
      </div>
      {isNoteOpen && (
        <div className="note-content">
          {isEditing ? (
            <>
              <textarea
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <button onClick={handleEdit}>Save</button>
            </>
          ) : (
            <>
              <p>{text}</p>
              <button onClick={() => setEditing(true)}>Edit</button>
              <button onClick={() => onDelete(id)}>Delete</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

const StickyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [newNoteText, setNewNoteText] = useState('');

  const addNote = () => {
    if (newNoteText.trim() !== '') {
      setNotes([...notes, { id: Date.now(), text: newNoteText }]);
      setNewNoteText('');
    }
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const editNote = (id, newText) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text: newText } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <div className="sticky-notes-container">
      <div className="sticky-notes-app">
        <div className="note-list">
          {notes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              text={note.text}
              onDelete={deleteNote}
              onEdit={editNote}
            />
          ))}
        </div>
        <div className="new-note">
          <textarea
            value={newNoteText}
            onChange={(e) => setNewNoteText(e.target.value)}
            placeholder="Type your new note here..."
          />
          <button onClick={addNote}>Add Note</button>
        </div>
      </div>
    </div>
  );
};

export default StickyNotes;