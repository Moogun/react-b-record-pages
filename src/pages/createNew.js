import React, { useState, useContext } from 'react';
import { AuthContext } from '../authProvider.js';
import { useDispatch } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {
  useTheme,
  Grid,
  Flex,
  Card,
  Text,
  Button,
} from '@aws-amplify/ui-react';

// import { newTeam } from './teamSlice';
import { PageHeader } from '../pageHeader.js';

export default function CreateNew() {
  let auth = useContext(AuthContext);
  console.log('[CreateNew]', auth);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleDismiss = () => {
    navigate(-1);
    // navigate('/', { replace: true });
  };

  const handleNew = (what) => {
    // below is not working
    // navigate(`/create/home/${what}`, { replace: true });
  };

  const { tokens } = useTheme();
  return (
    <Card
      margin={tokens.space.small}
      padding={tokens.space.zero}
      // style={{border: 'solid 1px green'}}
    >
      <Grid>
        <Card margin={tokens.space.small}>
          <PageHeader title="리그 / 팀 만들기" />

          <Flex
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch"
            alignContent="flex-start"
            wrap="nowrap"
            gap="0rem"
          >
            <nav>
              <Link to="league" >리그</Link> {' '}
              <Link to="team">팀</Link>
            </nav>
          </Flex>
        </Card>

      </Grid>
      <Outlet />
    </Card>
  );
}
