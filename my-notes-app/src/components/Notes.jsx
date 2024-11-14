import { Grid2 as Grid, Stack, Typography } from '@mui/material'
import { NoteCard } from './NoteCard/NoteCard'
import { NoteModal } from './NoteModal'
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

        return (

            <Stack>

                
            </Stack>
        )



}