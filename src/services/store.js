import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../pages/loginSlice';
import teamReducer from '../pages/teamSlice';
import leagueReducer from '../pages/league/leagueSlice';


export default configureStore({
  reducer: {
    user: userReducer,
    teams: teamReducer,
    leagues: leagueReducer,
  },
});
