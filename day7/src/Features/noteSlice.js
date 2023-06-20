import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myNotes: [],
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.myNotes.push(action.payload );
    },
    deleteNote: (state, action) => {
      state.myNotes = state.myNotes.filter((note) => note.id !== action.payload);
    },
    editNote: (state, action) => {
      const index=action.payload.index;
      state.myNotes[index]=action.payload.newData;
    },
  },
});

export const { addNote, deleteNote,editNote } = noteSlice.actions;

export default noteSlice.reducer;