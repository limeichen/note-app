
import { reactive } from 'vue';

const state = reactive({
    notes: JSON.parse(localStorage.getItem('notes')) || [],
    searchQuery: ''
});

const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(state.notes));
};

const addNote = (note) => {
    state.notes.push(note);
    saveNotes();
};

const deleteNote = (index) => {
    state.notes.splice(index, 1);
    saveNotes();
};

const updateNote = (index, updatedNote) => {
    state.notes[index] = updatedNote;
    saveNotes();
};

export default {
    state,
    addNote,
    deleteNote,
    updateNote
};
