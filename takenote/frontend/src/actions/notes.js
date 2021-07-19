import axios from 'axios';
import { createMessage } from './messages';

import { GET_NOTES, DELETE_NOTE, ADD_NOTE, GET_ERRORS } from './types';

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
      dispatch(createMessage({ deleteNote: "Note deleted" }));
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
      dispatch(createMessage({ addNote: "Note added" }));
      dispatch({
        type: ADD_NOTE,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      }
      dispatch({
        type: GET_ERRORS,
        payload: errors
      })

    });
};