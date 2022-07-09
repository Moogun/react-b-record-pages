import React, { useState, createContext, useContext } from 'react';
import './style.css';
import {
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import { AuthProvider, AuthContext } from './authProvider.js';
import AuthStatus from './authStatus.js';

import NewLeague from './pages/newLeague.js';
import League from './pages/league.js';
import Leagues from './pages/leagues.js';
import NewGame from './pages/newGame.js';
import NewTeam from './pages/newTeam.js';
import Teams from './pages/teams.js';
import Team from './pages/team.js';
import Login from './pages/login.js';

import RequireAuth from './pages/requireAuth/requireAuth.js';
import Account from './pages/requireAuth/account.js';
import Profile from './pages/requireAuth/profile.js';
import Settings from './pages/requireAuth/settings.js';

export default function App() {
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
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

          {/* service */}
          {/* 
            1. leagues -- list of leagues   
            2. individual route for each league 
            3. leagues/home/create 

            team ? 
            */}

          <Route path="/leagues" element={<Leagues />} />
          <Route path="leagues/:leagueId" element={<League />} />

          <Route path="newteam" element={<NewTeam />} />
          <Route path="teams" element={<Teams />} />
            
          <Route path="teams/:teamId" element={<Team />} />
          <Route path="newgame" element={<NewGame />} />
          <Route path="newleague" element={<NewLeague />} />

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

function Layout() {
  const auth = useContext(AuthContext);
  console.log('[app]', auth)
  return (
    <div>
      <AuthStatus AuthContext={AuthContext} />

      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/">Home</Link> {' | '}
        <Link to="/leagues">Leagues</Link> {' | '}
        <Link to="/teams">Teams</Link> {' | '}
        <Link to="/newteam">New Team</Link> {' | '}
        <Link to="/account">Account</Link> {' | '}
      </nav>

      <Outlet />
    </div>
  );
}
