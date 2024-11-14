import { Card, CardContent, Typography, IconButton, Grid2 as Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";




export default function NoteCard({note, deleteNote, updateNote}) {

return (

<Grid>
<Card>
    <CardContent>
        <Typography> {note.title} </Typography>
        <Typography variant="body2">
                        {new Date(note.createdTime).toLocaleString()}
                    </Typography>
    </CardContent>
    <>
    <IconButton aria-label="delete" onClick={() => deleteNote(note.id)}>
                    <DeleteIcon />
                    </IconButton>
                    </>
</Card>

</Grid>

)


}