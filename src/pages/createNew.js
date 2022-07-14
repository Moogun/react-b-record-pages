import React, { useState, useContext } from 'react';
import { AuthContext } from '../authProvider.js';
import { useDispatch } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {
  TextField,
  SelectField,
  TextAreaField,
  Button,
  Flex,
  View,
  Grid,
  Card,
  Divider,
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
    navigate(`/create/home/${what}`, { replace: true });
  };

  return (
    <div>
      <PageHeader title={'Create New'} />

      <Grid
        columnGap="0.5rem"
        rowGap="0.5rem"
        templateColumns="repeat(8, 1fr)"
        templateRows="1fr 1fr 1fr"
      >
        <Card columnStart="1" columnEnd="3">
          <nav>
            <Link to="league">리그 만들기</Link>
            <br />
            <Link to="team">팀 만들기</Link>
          </nav>
        </Card>
        <Card columnStart="3" columnEnd="-1">
          <Outlet />
        </Card>
      </Grid>
    </div>
  );
}
