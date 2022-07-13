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

import { Header, SubHeader, Footer } from './header.js';
import LeagueNew from './pages/league/leagueNew.js';
import LeagueEdit from './pages/league/leagueEdit.js';
import League from './pages/league/league.js';
import LeaguesMine from './pages/league/leaguesMine.js';
import Leagues from './pages/league/leagues.js';
import NewGame from './pages/newGame.js';
import NewTeam from './pages/newTeam.js';
import Teams from './pages/teams.js';
import Team from './pages/team.js';
import Login from './pages/login.js';

import RequireAuth from './pages/requireAuth/requireAuth.js';
import Account from './pages/requireAuth/account.js';
import Profile from './pages/requireAuth/profile.js';
import Settings from './pages/requireAuth/settings.js';

import { Grid, View, useTheme } from '@aws-amplify/ui-react';

export default function App() {
  let navigate = useNavigate();
  let location = useLocation();
  console.log('[app]-', location);
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
                <LeagueNew />
              </RequireAuth>
            }
          />
          {/* <Route path="/league/home/create" element={<NewLeague />} /> */}

          <Route path="/leagues" element={<Leagues />} />
          <Route path="leagues/:leagueId" element={<League />} />
          <Route path="leagues/:leagueId/edit" element={<LeagueEdit />} />

          <Route path="newteam" element={<NewTeam />} />
          <Route path="teams" element={<Teams />} />

          <Route path="teams/:teamId" element={<Team />} />
          <Route path="newgame" element={<NewGame />} />
          <Route path="leaguenew" element={<LeagueNew />} />

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
  backgroundColor: 'lightGray',
};

function Layout() {
  const auth = useContext(AuthContext);
  console.log('[app]', auth);
  const { tokens } = useTheme();

  return (
    <div>
      {/* <AuthStatus AuthContext={AuthContext} /> */}

      <Grid
        templateColumns="1fr 1fr 1fr 1fr 1fr 1fr"
        templateRows="2rem 2rem"
        gap={tokens.space.small}
      >
        <View
          
          columnStart="1"
          columnEnd="-1"
        >
          <Header auth={auth} />
        </View>

        <View
          columnStart="1"
          columnEnd="-1"
        >
          <SubHeader auth={auth} />
        </View>

        <View
          columnStart="1"
          columnEnd="6"
        >
          {location && location.pathname == '/' ? <Leagues /> : null}
          <Outlet />
        </View>

        <View
          columnStart="6"
          columnEnd="8"
        >
          {auth.user ? (
            <Link to="/league/home/create">
              {' '}
              New League
            </Link>
          ) : null}
        </View>

        <View
          backgroundColor={tokens.colors.blue[20]}
          columnStart="1"
          columnEnd="-1"
        >
          <Footer />
        </View>
      </Grid>
    </div>
  );
}
