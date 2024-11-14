import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";



export default function NoteModal({addNote}){
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [titleError, setTitleError] = useState(false)
    const [contentError, setContentError] = useState(false)

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setTitle('');
        setContent('');
    };

    const handleSave = () => {
        if (title.trim().length > 50) {
            setTitleError(true)
            return
        }
        if (content.trim().length > 200) {
            setContentError(true)
            return
        }
        if (title.trim() && content.trim()) {
            const newNote = {
                id: Math.random().toString(),
                title,
                content,
                createdTime: new Date(),
            };
            addNote(newNote);  // Send the new note up to App
            handleClose(); // Close the modal and reset the fields
        }

    }
return (
<div>
<Button variant="contained" color="primary" onClick={handleOpen}>
                Add Note
            </Button>
            <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                        Add Note
                    </DialogTitle>
                <DialogContent>
                    <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        error = {titleError}
                        helperText = {titleError && "Title must be less than 50 characters."} 
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
                        error = {contentError}
                        helperText = { contentError && "Content must be less than 200 characters."}
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

</div>

)


}