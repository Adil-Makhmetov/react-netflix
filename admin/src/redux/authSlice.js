import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import instance from "../http/instance";

export const login = createAsyncThunk('user', async (user) => {
  const res = await instance.post('auth/login', user);
  return res.data;
})

export const authSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    pending: false,
    error: false,
  },
  reducers: {
    logout: (state, action) => ({
      user: null,
      pending: false,
      error: false,
    })
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [login.fulfilled]: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      Object.assign(instance.defaults, {headers: {authorization: `Bearer ${action.payload.accessToken}`}});
      state.pending = false;
      state.user = action.payload;
    },
    [login.rejected]: (state) => {
      state.pending = null;
      state.error = true;
    }
  }
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;