import { createSlice } from '@reduxjs/toolkit';

import { getUser } from '../data/user_data.js';
let user = getUser('001') 
console.log('user', user)

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: user
  },
  reducers: {
    signin: (state) => {
      state.value += 1;
    },
    signout: (state) => {
      state.value = null;
    },
    signin_test: (state, action) => {
      console.log('[login slice]', action.payload)
      state.value = user
    },
    signout_test: (state) => {
      state.value = null
    }
  },
});

export const { signin, signout, signin_test, signout_test } = userSlice.actions;

export default userSlice.reducer;
