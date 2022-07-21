import React, { useState, useContext } from 'react';
import { AuthContext } from '../authProvider.js';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { newTeam } from './teamSlice';
import {
  useTheme,
  TextField,
  SelectField,
  TextAreaField,
  Button,
  Flex,
  View,
  Grid,
  Card,
  Divider,
  Heading,
  Text,
} from '@aws-amplify/ui-react';

// import { newTeam } from './teamSlice';

export default function NewTeam() {
  let auth = useContext(AuthContext);
  console.log('[teamNew]', auth);

  const dispatch = useDispatch();

  const [team, setTeam] = useState({
    id: '',
    name: '',
    locations: [],
    createdBy: '',
  });

  const handleAddLocation = (e) => {
    setTeam({
      ...team,
      [e.target.name]: team.locations.push(1),
    });
    e.preventDefault();
    console.log('team.frequentLocation', team);
  };

  const handleInputChange = (e) => {
    let value = e.target.value;
    setTeam({
      ...team,
      [e.target.name]: value,
    });
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    dispatch(newTeam(team));
    setTeam({});
    e.preventDefault();
  };

  let navigate = useNavigate();

  const handleDismiss = () => {
    // navigate(-1);
    navigate('/', { replace: true });
  };

  const {tokens} = useTheme()
  return (
    <Card
    // variation="elevated"
    margin={tokens.space.small}
  >
      <Heading level={5}> 팀 만들기 </Heading>
      {/* <Text as="P"> username : {auth.user.username} </Text> */}

      {/* <Button onClick={handleDismiss}>dismiss </Button> */}
      <br />
      <form onSubmit={handleSubmit}>
        <Flex direction="column">
          <TextField
            size="small"
            label="name"
            placeholder="팀 이름"
            name="name"
            onChange={handleInputChange}
            value={team.name}
          />
          <TextField
            size="small"
            label="팀 설명"
            placeholder="팀 설명"
            name="description"
            onChange={handleInputChange}
            value={team.name}
          />
          <SelectField
            size="small"
            label="종목"
            placeholder="sports"
            name="sports"
            options={['축구', '야구', '농구']}
            onChange={handleInputChange}
            value={team.location}
          />

          <TextField
            size="small"
            label="주 경기장"
            placeholder="location"
            name="location"
            onChange={handleInputChange}
            value={team.location}
          />
          <Grid templateColumns="1fr 1fr">
            <Button size="small" name="newLocation" onClick={handleAddLocation}>
              {' '}
              + 경기장 추가{' '}
            </Button>
          </Grid>
          <Button size="small" type="submit" value="Submit">
            {' '}
            Save{' '}
          </Button>
        </Flex>
      </form>
    </Card>
  );
}
