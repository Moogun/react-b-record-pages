import React, { useContext } from 'react';
import './style.css';
import { Outlet } from 'react-router-dom';

import { AuthContext } from './authProvider.js';
import AuthStatus from './authStatus.js';

import { Header, SubHeader } from './header.js';
import { Footer } from './footer.js';

import Leagues from './pages/league/leagues.js';
import {
  Grid,
  View,
  useTheme,
  Flex,
  Divider,
  Heading,
  Text,
  Card,
} from '@aws-amplify/ui-react';

export default function Layout() {
  const auth = useContext(AuthContext);
  console.log('[app]', auth);
  const { tokens } = useTheme();

  return (
    <div>
      {/* <AuthStatus AuthContext={AuthContext} /> */}

      <Grid templateColumns="repeat(12, 1fr)">
        <View
          columnStart="2"
          columnEnd="12"
          padding={tokens.space.xxxs}
          gap={tokens.space.small}
          >
          <Header columnStart="1" columnEnd="13" auth={auth} />
        </View>

        <View
          columnStart="2"
          columnEnd="12"
          paddingLeft={tokens.space.xxxs}
          paddingTop={tokens.space.small}
          paddingBottom={tokens.space.small}
        >
          <SubHeader auth={auth} />
        </View>

        {/* <Flex direction="column">
          <Divider size="small" />
        </Flex> */}

        <View columnStart="2" columnEnd="12" style={{ minHeight: '86vh' }}>
          {location && location.pathname == '/' ? <Leagues /> : null}
          <Outlet />
        </View>

        <View
          columnStart="1"
          columnEnd="13"
        >
          <Footer />
        </View>
      </Grid>
    </div>
  );
}
