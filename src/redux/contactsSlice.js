import { createSlice } from '@reduxjs/toolkit';

const intitialStateContact = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: intitialStateContact,
  reducers: {
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
  },
});

export const { deleteContact, addContact } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
