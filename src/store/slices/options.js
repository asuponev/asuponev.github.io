import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: localStorage.getItem('theme') || 'light',
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    changeMode: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.mode);
    },
  }
});

const { actions, reducer } = optionsSlice;

export default reducer;
export const { changeMode } = actions;