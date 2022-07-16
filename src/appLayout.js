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

      <Grid templateColumns="repeat(12, 1fr)" gap={tokens.space.small}>
        <View
          columnStart="1"
          columnEnd="-1"
          backgroundColor={tokens.colors.blue[10]}
          templateColumns="repeat(12, 1fr)"
        >
          <Grid templateColumns="repeat(12, 1fr)">
            <Card
              columnStart="2"
              columnEnd="12"
              backgroundColor={tokens.colors.red[10]}
              fontSize="0.8rem"
              padding={tokens.space.xxs}
            >
              Header
            </Card>
          </Grid>
        </View>

        <View
          columnStart="1"
          columnEnd="-1"
          backgroundColor={tokens.colors.blue[10]}
          templateColumns="repeat(12, 1fr)"
        >
          <Grid templateColumns="repeat(12, 1fr)">
            <Card
              columnStart="2"
              columnEnd="12"
              backgroundColor={tokens.colors.red[10]}
              padding={tokens.space.xxs}
            >
              SubHeader
            </Card>
          </Grid>
        </View>

        <View
          columnStart="2"
          columnEnd="12"
          style={{ minHeight: '80vh' }}
          backgroundColor={tokens.colors.blue[40]}
        >
          <Heading level={2} backgroundColor={tokens.colors.green[20]}>
            Title
          </Heading>

          <Heading level={5} backgroundColor={tokens.colors.green[40]}>
            SubTitle
          </Heading>
          <Card backgroundColor={tokens.colors.green[60]} variation="outlined">
            <Text as="p"> Body </Text>
            <Text as="p"> Body </Text>
            <Text as="p"> Body </Text>
            <Text as="p"> Body </Text>
          </Card>

          <Heading level={5} backgroundColor={tokens.colors.green[40]}>
            SubTitle
          </Heading>
          <Card backgroundColor={tokens.colors.green[60]} variation="outlined">
            <Text as="p"> Body </Text>
            <Text as="p"> Body </Text>
            <Text as="p"> Body </Text>
            <Text as="p"> Body </Text>
          </Card>
        </View>

        <View
          columnStart="1"
          columnEnd="-1"
          backgroundColor={tokens.colors.blue[60]}
          style={{minHeight: "100px"}}
        >
          footer
        </View>
      </Grid>

      {/* <Grid
        templateColumns="repeat(12, 1fr)"
        // templateColumns="base: '1fr', large: repeat(12, 1fr)"
      >
        <View
          columnStart="1"
          columnEnd="13"
          // rowStart="1" rowEnd="1"
          padding={tokens.space.xxxs}
          backgroundColor={tokens.colors.brand.primary[100]}
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

        <Flex direction="column">
          <Divider size="small" />
        </Flex>

        <View
          columnStart="2"
          columnEnd="12"
          // rowStart="3" rowEnd="3"
          style={{ minHeight: '86vh' }}
        >
          {location && location.pathname == '/' ? <Leagues /> : null}
          <Outlet />
        </View>

        <View
          backgroundColor={tokens.colors.background.tertiary}
          columnStart="1"
          columnEnd="13"
          // rowStart="4" rowEnd="-1"
        >
          <Footer />
        </View>
      </Grid> */}

      {/* <Grid
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

      <Grid templateColumns="repeat(12, 1fr)" gap={tokens.space.small}>
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
        templateRows="1fr 1fr"
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

        <View
          backgroundColor={tokens.colors.background.tertiary}
          columnStart="1"
          columnEnd="13"
          // rowStart="4" rowEnd="-1"
        >
          <Footer />
        </View>
      </Grid> */}
    </div>
  );
}
