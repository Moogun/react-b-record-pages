import React, { useContext } from 'react';
import './style.css';
import { Outlet } from 'react-router-dom';

import { AuthContext } from './authProvider.js';
import AuthStatus from './authStatus.js';

import { Header, SubHeader } from './header.js';
import { Footer } from './footer.js';

import Leagues from './pages/league/leagues.js';
import { Grid, View, useTheme, Flex, Divider } from '@aws-amplify/ui-react';

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
        backgroundColor={tokens.colors.brand.primary[100]}
        gap={tokens.space.small}
      >
        <View
          columnStart="2"
          columnEnd="12"
          // rowStart="1" rowEnd="1"
          padding={tokens.space.xxxs}
        >
          <Header auth={auth} />
        </View>
      </Grid>

      <Grid
        templateColumns="repeat(12, 1fr)"
        gap={tokens.space.small}
      >
        <View
          columnStart="2"
          columnEnd="12"
          paddingLeft={tokens.space.xxxs}
          paddingTop={tokens.space.small}
          paddingBottom={tokens.space.small}
        >
          <SubHeader auth={auth} />
        </View>
      </Grid>

      <Flex direction="column">
        <Divider size="small" />
      </Flex>

      <Grid
        templateColumns="repeat(12, 1fr)"
        templateRows="90vh 1fr"
        gap={tokens.space.small}
        backgroundColor={tokens.colors.background.secondary}
      >
        <View
          columnStart="2"
          columnEnd="12"
          // rowStart="3" rowEnd="3"
        >
          {location && location.pathname == '/' ? <Leagues /> : null}
          <Outlet />
        </View>

        {/* <View columnStart="6" columnEnd="8">
          {auth.user ? <Link to="/league/home/create"> New League</Link> : null}
        </View> */}

        <View
          backgroundColor={tokens.colors.background.tertiary}
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
