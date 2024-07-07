import { createSlice } from '@reduxjs/toolkit';

import { login } from './authOperations.ts';

export interface IState {
  userName: string;
  password: string;
  token: string;
  loading: boolean;
  error: string;
}

const initialState: IState = {
  userName: '',
  password: '',
  token: '',
  loading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(login.rejected, state => {
        state.loading = false;
      });
  },
});

const authReduces = authSlice.reducer;

export { authReduces };
