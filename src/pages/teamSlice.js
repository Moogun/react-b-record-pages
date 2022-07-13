import { createSlice } from '@reduxjs/toolkit';

import { getTeams } from '../data/team_data.js';
let teams = getTeams();

export const teamSlice = createSlice({
  name: 'teams',
  initialState: {
    list: teams,
    selected: null,
  },
  reducers: {
    add: (state) => {
      state.value += 1;
    },
    remove: (state) => {
      state.value -= 1;
    },
    getTeam: (state, action) => {
      state.selected = state.list.find((t) => t.id == action.payload);
    },
    newTeam: (state, action) => {
      console.log(
        '[team slice] state list',
        state.list,
        'payload',
        action.payload
      );
      state.list = [...state.list, action.payload];
    },
  },
});

export const { add, remove, getTeam, newTeam } = teamSlice.actions;

export default teamSlice.reducer;

// teams.find((t) => t.id == number);
