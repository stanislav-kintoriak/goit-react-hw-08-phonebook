import { createAsyncThunk } from '@reduxjs/toolkit';

import { getContacts, postContact, deleteContact } from '../pbApi';

export const getContactsThunk = createAsyncThunk(
  'phonebook/getContacts',
  async () => {
    const data = await getContacts();

    return data;
  }
);

export const postContactThunk = createAsyncThunk(
  'phonebook/postContact',
  async newContact => {
    const data = await postContact(newContact);
    return data;
  }
);

export const deleteContactThunk = createAsyncThunk(
  'phonebook/deleteContact',
  async id => {
    const data = await deleteContact(id);
    return data;
  }
);
