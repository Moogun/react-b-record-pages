import React, { useState, useContext } from 'react';
import { AuthContext } from '../authProvider.js';
import { useDispatch } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useTheme, Grid, Card, Button } from '@aws-amplify/ui-react';

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
    <Card margin={tokens.space.small}>
      {/* <PageHeader title={'리그/팀 만들기'} /> */}

      {/*  handle new is not working, don't know why 
      <Button onClick={() => handleNew('league')}>리그</Button > 
      <Button onClick={() => handleNew('team')}>팀 </Button > */}

      <Grid
        columnGap="0.5rem"
        templateColumns="repeat(8, 1fr)"
        // backgroundColor={tokens.colors.red[10]}
      >
        <Card 
        // column="1/3" backgroundColor={tokens.colors.blue[10]}
        >
          <nav>
            <Link to="league">리그</Link>
            <br />
            <Link to="team">팀</Link>
          </nav>
        </Card>
        <Card column="3/-1" 
        variation="elevated"
        // backgroundColor={tokens.colors.green[10]}
        >
          <Outlet />
        </Card>
      </Grid>
    </Card>
  );
}
