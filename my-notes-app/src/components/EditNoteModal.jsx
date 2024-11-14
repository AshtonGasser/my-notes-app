import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState, useEffect } from "react";


export default function EditNoteModal() {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        setTitle(note.title);
        setContent(note.content);
    }, [note]);



}