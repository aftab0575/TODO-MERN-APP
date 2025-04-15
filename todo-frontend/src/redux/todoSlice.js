import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const backendBaseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

const API = axios.create({
  baseURL: `${backendBaseUrl}/api`,
});

// Add token to headers
const getAuthHeaders = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

// Thunks
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  const res = await API.get('/todos', getAuthHeaders(token));
  return res.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (text, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  const res = await API.post('/todos', { text }, getAuthHeaders(token));
  return res.data;
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async ({ id, text }, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  const res = await API.put(`/todos/${id}`, { text }, getAuthHeaders(token));
  return res.data;
});

export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (id, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  const res = await API.patch(`/todos/toggle/${id}`, {}, getAuthHeaders(token));
  return res.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  await API.delete(`/todos/${id}`, getAuthHeaders(token));
  return id;
});

// Slice
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(t => t._id === action.payload._id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(t => t._id === action.payload._id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(t => t._id !== action.payload);
      });
  }
});

export default todoSlice.reducer;
