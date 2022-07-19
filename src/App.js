import React, { } from 'react';
import './style.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import { AuthProvider, AuthContext } from './authProvider.js';
import AppLayout from './appLayout.js';

import LeagueNew from './pages/league/leagueNew.js';
import LeagueEdit from './pages/league/leagueEdit.js';
import LeagueEditInfo from './pages/league/leagueEditInfo.js';
import LeagueApp from './pages/league/leagueApp.js';

import League from './pages/league/league.js';
import LeaguesMine from './pages/league/leaguesMine.js';
import Leagues from './pages/league/leagues.js';

import NewGame from './pages/newGame.js';

import TeamNew from './pages/teamNew.js';
import Teams from './pages/teams.js';
import Team from './pages/team.js';
import TeamJoin from './pages/teamJoin.js';
import Login from './pages/login.js';

import CreateNew from './pages/createNew.js';

import RequireAuth from './pages/requireAuth/requireAuth.js';
import Account from './pages/requireAuth/account.js';
import Profile from './pages/requireAuth/profile.js';
import Settings from './pages/requireAuth/settings.js';

export default function App() {
  let location = useLocation();
  console.log('[app]-', location);
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* Auth */}
          <Route path="login" element={<Login />} />
          <Route
            path="account"
            element={
              <RequireAuth AuthContext={AuthContext}>
                <Account />
              </RequireAuth>
            }
          >
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route
            path="create/home"
            element={
              <RequireAuth AuthContext={AuthContext}>
                <CreateNew />
              </RequireAuth>
            }
          >
            <Route path="league" element={<LeagueNew />} />
            <Route path="team" element={<TeamNew />} />
          </Route>



          <Route path="/leaguesmine" element={<LeaguesMine />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="leagues/:leagueId" element={<League />} />
          <Route path="leagues/:leagueId/edit" element={<LeagueEdit />}> 
            <Route path="info" element={<LeagueEditInfo />} />
            <Route path="participants" element={<LeagueEditInfo />} />
            <Route path="schedules" element={<LeagueEditInfo />} />
            <Route path="results" element={<LeagueEditInfo/>} />
          </Route>
          <Route path="leagues/:leagueId/app" element={<LeagueApp />} />

          <Route path="teams" element={<Teams />} />

          <Route path="teams/:teamId" element={<Team />} />
          <Route path="teams/:teamId/join" element={<TeamJoin />} />
          {/* <Route path="newgame" element={<NewGame />} />
 */}

          {/* 404 page */}
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
