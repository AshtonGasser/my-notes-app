import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid2 as Grid,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import  EditNoteModal  from '../EditNoteModal';

export default function NoteCard({ note, deleteNote, updateNote, isAuthenticated }) {
  return (
    <Grid>
      <Card>
        <CardContent>
          <Typography> {note.title} </Typography>
          <Typography variant='body2'>
            {new Date(note.createdTime).toLocaleString()}
          </Typography>
        </CardContent>
        {isAuthenticated && (
        <>
          <EditNoteModal note={note} onSave={updateNote} />
          <IconButton aria-label='delete' onClick={() => deleteNote(note.id)}>
            <DeleteIcon />
          </IconButton>
        </>
        )}
      </Card>
    </Grid>
  );
}
