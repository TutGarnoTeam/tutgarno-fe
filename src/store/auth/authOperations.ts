import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError} from "axios";

const login = createAsyncThunk<string, void, { rejectValue: string }>(
  'authSlice/login',
  async (_, {rejectWithValue}) => {
    try {
      return 'token'; // todo
    } catch (e) {
      const err = e as AxiosError
      return rejectWithValue(err.message);
    }
  },
);

export {login}
