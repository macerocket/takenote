import axios from 'axios';
import { GET_NOTES, DELETE_NOTE, ADD_NOTE } from './types';

// Get notes
export const getNotes = () => dispatch => {
  axios.get('/api/notes/')
    .then(res => {
      dispatch({
        type: GET_NOTES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// Delete note
export const deleteNote = (id) => dispatch => {
  axios.delete(`/api/notes/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_NOTE,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// Add note
export const addNote = note => dispatch => {
  axios.post(`/api/notes/`, note)
    .then(res => {
      dispatch({
        type: ADD_NOTE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};