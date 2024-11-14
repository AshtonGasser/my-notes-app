import { Grid2 as Grid, Stack, Typography } from '@mui/material';
import NoteCard from './NoteCard/NoteCard';
import NoteModal from './NoteModal';
import { useEffect, useState } from 'react';

export default function Notes() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  // Load notes from local storage when the component mounts
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const updateNote = (updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <Stack>
      <Stack
        direction='column'
        justifyContent='space-between'
        alignItems='center'
        px={5}
        py={2}
      >
        <Typography variant='h1' mb={4}>
          Notes App
        </Typography>
        <NoteModal addNote={addNote} />
      </Stack>
      <Grid container spacing={5}>
        {notes.map((note) => (
          <NoteCard
            updateNote={updateNote}
            deleteNote={deleteNote}
            key={note.id}
            note={note}
          />
        ))}
      </Grid>
    </Stack>
  );
}
