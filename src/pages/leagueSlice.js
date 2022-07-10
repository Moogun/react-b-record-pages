import { createSlice } from '@reduxjs/toolkit';

import { getLeagues } from '../data/league_data.js';
let leagues = getLeagues() 

export const leagueSlice = createSlice({
  name: 'leagues',
  initialState: {
    list: leagues,
    selected: null
  },
  reducers: {
    add: (state, action) => {
      state.value += 1;
    },
    remove: (state) => {
      state.value -= 1;
    },
    getLeague: (state, action) => {
      state.selected = state.list.find(t => t.id == action.payload);
    },
  },
});

export const { add, remove, getLeague } = leagueSlice.actions;

export default leagueSlice.reducer;
