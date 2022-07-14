import { createSlice } from '@reduxjs/toolkit';

import { getLeagues } from '../../data/league_data.js';
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
    selectLeague: (state, action) => {
      console.log('[league slice]', action.payload)
      state.selected = state.list.find(t => t.id == action.payload);
    },
    newLeague: (state, action) => {
      console.log('[league slice] state list', state.list, 'payload', action.payload)
      state.list = [...state.list, action.payload]
    }
  },
});

export const { add, remove, selectLeague, newLeague } = leagueSlice.actions;

export default leagueSlice.reducer;
