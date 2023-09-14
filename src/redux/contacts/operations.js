import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get("/contacts");
    return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (credentials, {rejectWithValue}) => {
    try {
      const response = await axios.post("/contacts", credentials);
    return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (credentials, {rejectWithValue}) => {
    try {
      const response = await await axios.delete(`/contacts/${credentials}`);
    return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
