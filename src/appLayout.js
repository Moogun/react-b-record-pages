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
  Icon,
  Button,
} from '@aws-amplify/ui-react';

const IconSave = () => {
  return (
    <Icon
      ariaLabel=""
      pathData="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3ZM19 19H5V5H16.17L19 7.83V19ZM12 12C10.34 12 9 13.34 9 15C9 16.66 10.34 18 12 18C13.66 18 15 16.66 15 15C15 13.34 13.66 12 12 12ZM6 6H15V10H6V6Z"
    />
  );
};

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

        <View columnStart="2" columnEnd="12" style={{ minHeight: '86vh' }}>
          {location && location.pathname == '/' ? <Leagues /> : null}
          <Outlet />
        </View>

        <View columnStart="1" columnEnd="13">
          <Footer />
        </View>
      </Grid>{' '}
    </div>
  );
}
