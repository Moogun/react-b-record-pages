import React, { useContext } from 'react';
import './style.css';
import { Link, Outlet } from 'react-router-dom';

import { AuthContext } from './authProvider.js';
import AuthStatus from './authStatus.js';

import { Header, SubHeader, Footer } from './header.js';
import Leagues from './pages/league/leagues.js';
import { Grid, View, useTheme } from '@aws-amplify/ui-react';

export default function Layout() {
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
        <View columnStart="1" columnEnd="-1">
          <Header auth={auth} />
        </View>

        <View columnStart="1" columnEnd="-1">
          <SubHeader auth={auth} />
        </View>

        <View columnStart="1" columnEnd="6">
          {location && location.pathname == '/' ? <Leagues /> : null}
          <Outlet />
        </View>

        <View columnStart="6" columnEnd="8">
          {auth.user ? <Link to="/league/home/create"> New League</Link> : null}
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
