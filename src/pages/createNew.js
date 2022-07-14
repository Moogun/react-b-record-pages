import React, { useState, useContext } from 'react';
import { AuthContext } from '../authProvider.js';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  TextField,
  SelectField,
  TextAreaField,
  Button,
  Flex,
  View,
  Grid,
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

      <Button onClick={() => handleNew('league')}> New League </Button>
      <Button onClick={() => handleNew('team')}> New Team </Button>
      {/* <form onSubmit={handleSubmit}>
        <Flex direction="column">
          <TextField
            label="name"
            placeholder="000_team"
            name="name"
            onChange={handleInputChange}
            value={team.name}
          />
          <TextField
            label="Location"
            placeholder="location"
            name="location"
            onChange={handleInputChange}
            value={team.location}
          />
        
          <Button type="submit" value="Submit">
            {' '}
            Save{' '}
          </Button>
        </Flex>
      </form> */}
      <Outlet />
    </div>
  );
}
