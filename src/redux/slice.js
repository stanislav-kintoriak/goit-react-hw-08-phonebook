import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

import {
  getContactsThunk,
  postContactThunk,
  deleteContactThunk,
} from './phonebookThunk';

import {
  handlerAddContact,
  handlerDeleteContact,
  handlerPending,
  handlerError,
  handlerGetContacts,
} from './sliceHandlers';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,

  reducers: {
    updateFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlerPending)
      .addCase(getContactsThunk.fulfilled, handlerGetContacts)
      .addCase(getContactsThunk.rejected, handlerError)
      .addCase(postContactThunk.pending, handlerPending)
      .addCase(postContactThunk.fulfilled, handlerAddContact)
      .addCase(postContactThunk.rejected, handlerError)
      .addCase(deleteContactThunk.pending, handlerPending)
      .addCase(deleteContactThunk.fulfilled, handlerDeleteContact)
      .addCase(deleteContactThunk.rejected, handlerError);
  },
});

export const phonebookReducer = phonebookSlice.reducer;
export const { updateFilter, addContact, deleteContact } =
  phonebookSlice.actions;
