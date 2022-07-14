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
        templateColumns="repeat(12, 1fr)"
        // templateColumns="base: '1fr', large: repeat(12, 1fr)"
        // templateRows="1rem 1rem auto 1rem"
        gap={tokens.space.small}
      >
        <View 
          columnStart="2" columnEnd="12" 
          // rowStart="1" rowEnd="1"
        >
          <Header auth={auth} />
        </View>

        <View columnStart="2" columnEnd="12"
        // rowStart="2" rowEnd="2"
        >
          <SubHeader auth={auth} />
        </View>

        <View columnStart="2" columnEnd="12"
        // rowStart="3" rowEnd="3"
        >
          {location && location.pathname == '/' ? <Leagues /> : null}
          <Outlet />
        </View>

        {/* <View columnStart="6" columnEnd="8">
          {auth.user ? <Link to="/league/home/create"> New League</Link> : null}
        </View> */}

        <View
          backgroundColor={tokens.colors.background.secondary}
          columnStart="1"
          columnEnd="13"
          // rowStart="4" rowEnd="-1"
        >
          <Footer />
        </View>
      </Grid>
    </div>
  );
}
