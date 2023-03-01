import { createSlice, nanoid } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: { id: nanoid(), ...contact },
        };
      },
    },
    delateContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'ContactsData',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, delateContact } = contactsSlice.actions;

export const getContacts = state => state.contacts.contacts;
