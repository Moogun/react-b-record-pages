import React, { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../authProvider.js';
import {
  Card,
  View,
  Heading,
  Flex,
  Badge,
  Text,
  Button,
  ButtonGroup,
  useTheme,
  Grid,
} from '@aws-amplify/ui-react';

import { PageHeader } from '../../pageHeader.js';

export default function Account() {
  let auth = useContext(AuthContext);
  console.log('[Account]', auth);

  let navigate = useNavigate();

  return (
    <div>
      <PageHeader title={'내 계정'} />
      <Grid
        columnGap="0.5rem"
        rowGap="0.5rem"
        templateColumns="repeat(8, 1fr)"
        templateRows="1fr 1fr 1fr"
      >
        <Card columnStart="1" columnEnd="2">
      <nav>
        <Link to="profile">Profile</Link>
        <br />
        <Link to="settings">Settings</Link>
      </nav>
        </Card>
        <Card columnStart="2" columnEnd="-1">
          <Outlet />
        </Card>
      </Grid>
      
     
    </div>
  );
}
