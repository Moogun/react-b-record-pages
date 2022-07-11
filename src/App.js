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

import {Header, SubHeader, Footer} from './header.js'
import NewLeague from './pages/newLeague.js';
import League from './pages/league.js';
import LeaguesMine from './pages/leaguesMine.js';
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
  console.log('[app]-', location)
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

          <Route
            path="/league/home/create"
            element={
              <RequireAuth AuthContext={AuthContext}>
                <NewLeague />
              </RequireAuth>
            }
          />
          {/* <Route path="/league/home/create" element={<NewLeague />} /> */}

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

const fStyle = {
  padding: '50px',
  margin: '1rem',
  backgroundColor: 'lightGray'
};

function Layout() {
  const auth = useContext(AuthContext);
  console.log('[app]', auth);
  return (
    <div>
      {/* <AuthStatus AuthContext={AuthContext} /> */}
      <Header auth={auth} />
      <SubHeader auth={auth} />

      {auth.user ? (
        <Link to="/league/home/create" style={{ marginLeft: '200px' }}>
          {' '}
          New League
        </Link>
      ) : null}

      
      {location && location.pathname == '/' ? <Leagues /> : null}
      <Outlet />

      <Footer />
    </div>
  );
}


