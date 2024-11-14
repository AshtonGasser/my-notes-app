import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState, useEffect } from "react";


export default function EditNoteModal({note, onSave}) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        setTitle(note.title);
        setContent(note.content);
    }, [note]);

    const handleSave = () => {
        if (title.trim() && content.trim()) {
            const updatedNote = {
                ...note,
                title,
                content,
            };
            onSave(updatedNote);
            setOpen(false)
        }
    };

    return(
        <>
          <Button onClick={handleOpen}>
            Edit
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit Note: {note.title}</DialogTitle>
            <DialogContent>
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    label="Content"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    minRows={3}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                 </DialogContent>
                 <DialogActions>
                    <Button onClick={handleClose} color="secondary" sx={{ mr: 1 }}>
                        Cancel
                    </Button>
                    <Button onClick={handleSave} variant="contained" color="primary">
                        Save
                    </Button>
            </DialogActions>    
        </Dialog>
        </>


    )

}