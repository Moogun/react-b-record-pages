import React, { useState, useContext } from 'react';
import { AuthContext } from '../authProvider.js';

import { useSelector, useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';

import { useLocation, useNavigate, Navigate, Link } from 'react-router-dom';
import {
  useTheme,
  TextField,
  SelectField,
  TextAreaField,
  Button,
  ButtonGroup,
  Flex,
  View,
  Card,
  Grid,
  Divider,
  Heading,
  Text,
  SwitchField,
} from '@aws-amplify/ui-react';

import { newLeague } from './leagueSlice';

export default function LeagueNew() {
  const dispatch = useDispatch();

  const [league, setLeague] = useState({
    id: '9',
    title: 'test',
    createdBy: { id: '001', username: 'moo' },
    gamePerTeam: 'test',
    dateToStart: 'test',
    dateToEnd: 'test',
    numOfteamsParticipating: '1',
    teamsParticipating: '1',
    games: [],
    etc: 'Amplify UI is awesome!',
  });
  // const [location, setLocation] = useState()

  const handleInputChange = (e) => {
    let value = e.target.value;
    setLeague({
      ...league,
      [e.target.name]: value,
    });
    e.preventDefault();
  };

  const handleAddGame = (e) => {
    console.log('league', league);
    console.log('e.target', e.target);
    // setLeague((prev) => {
    //   console.log('prev.games', prev);
    // });
    // e.preventDefault();
    setLeague({
      ...league,
      [e.target.name]: league.games.push(1),
    });
    e.preventDefault();
    console.log('league 2', league);
  };

  const handleSubmit = (e) => {
    dispatch(newLeague(league));
    setLeague({});
    e.preventDefault();
  };

  let navigate = useNavigate();
  let location = useLocation();

  const handleDismiss = () => {
    // 1. navigate here, navigate back to account then set user null, therafter navigate to /login
    // <Navigate />doesn't work here either
    // 2. navigate(-1);
    // ------- note : <a href> instead of <Link> will rerender the whole page, said by some

    // this works for now
    navigate('/', { replace: true });
  };
  const { tokens } = useTheme();
  return (
    <View>
      <Card margin={tokens.space.small}>
        <Heading level={5}> ?????? </Heading>
        <br />

        {/* <Button onClick={handleDismiss}>dismiss </Button> */}

        {/* <Grid>
          <form onSubmit={handleSubmit}>
            <Flex direction="column">
              <TextField
                size="small"
                label="?????? ???"
                placeholder="000_league"
                name="title"
                onChange={handleInputChange}
                value={league.title}
              />
              <TextField
                size="small"
                label="?????????"
                placeholder="July 1 2022"
                name="leagueToStart"
                onChange={handleInputChange}
                value={league.dateToStart}
              />
              <TextField
                size="small"
                label="?????????"
                placeholder="July 1 2022"
                name="leagueToEnd"
                onChange={handleInputChange}
                value={league.dateToEnd}
              />
              <TextField
                size="small"
                label="???????????????"
                placeholder="July 1 2022"
                name="appToStart"
                onChange={handleInputChange}
                value={league.dateToStart}
              />
              <TextField
                size="small"
                label="???????????????"
                placeholder="July 1 2022"
                name="appToEnd"
                onChange={handleInputChange}
                value={league.dateToEnd}
              />
              <SelectField
                size="small"
                label="????????? ???"
                options={['2', '3', '4', '5', '6', '7', '8', '9', '10']}
                name="numOfteamsParticipating"
                onChange={handleInputChange}
                value={league.numOfteamsParticipating}
              />
              <SelectField
                size="small"
                label="?????? ?????? ?????????"
                options={['1', '2', '3', '4']}
                name="gamePerTeam"
                onChange={handleInputChange}
                value={league.gamePerTeam}
              />
              <SelectField
                size="small"
                label="?????? ?????? ??????"
                options={['?????? ??? ???????????? ??????', '?????? ?????? ???']}
                name="tournament"
                onChange={handleInputChange}
                value={league.gamePerTeam}
              />
              The Num of Games:{' '}
              {combinations(league.numOfteamsParticipating, 2)}
              <TextAreaField
                size="small"
                label="etc"
                name="etc"
                onChange={handleInputChange}
                value={league.etc}
              />
              <Divider orientation="horizontal" />
              {league.games && league.games.length > 0
                ? league.games.map((g) => {
                    return <li> {g} </li>;
                  })
                : null}
              <Grid templateColumns="1fr 1fr">
                <Button size="small" name="newSchedule" onClick={handleAddGame}>
                  {' '}
                  + Add New Shcedule{' '}
                </Button>
              </Grid>
              <Divider orientation="horizontal" />
              <Button size="small" type="submit" value="Submit">
                {' '}
                Save{' '}
              </Button>
            </Flex>
          </form>
        </Grid> */}

      
      </Card>
    </View>
  );
}

function factorial(r) {
  let s = 1;
  while (r > 1) s *= r--;
  return s;
}

function combinations(n, r) {
  let s = 1;
  let i = r;
  // n*(n-1)*....*(n-r+1)
  while (i < n) s *= ++i;
  return s / factorial(n - r);
}

console.log(combinations(3, 2));
