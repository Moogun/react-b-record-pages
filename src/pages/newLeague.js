import React, { useState } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import {
  TextField,
  SelectField,
  TextAreaField,
  Flex,
} from '@aws-amplify/ui-react';

import { useSelector, useDispatch } from 'react-redux';
import {
  newLeague
} from './leagueSlice'

export default function NewLeague() {
  const dispatch = useDispatch();

  const [league, setLeague] = useState({
    id: '9',
    title: 'test',
    gamePerTeam: 'test',
    dateToStart: 'test',
    dateToEnd: 'test',
    numOfteamsParticipating: '1',
    teamsParticipating: '1',
    games: [],
    etc: ''
  });
  // const [location, setLocation] = useState()

  const handleInputChange = (e) => {
    // const target = e.target;
    // const name = target.name;
    //   name == 'teamName' ? setTeamName(target.value) : setLocation(target.value);

    let value = e.target.value;
    setLeague({
      ...league,
      [e.target.name]: value,
    });
    // console.log('[login handleChange] ', u.username, u.password)
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    //   // do sth and clear input
    //   console.log(teamName, location)
    
    //   setTeamName('');
    //   setLocation('');
    dispatch(newLeague(league))
    setLeague({})
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

  return (
    <div>
      <h5>new league</h5>
      <button onClick={handleDismiss}>dismiss </button>
      <form onSubmit={handleSubmit}>
        <Flex direction="column">
          <TextField
            label="Title"
            placeholder="000_league"
            name="title"
            onChange={handleInputChange}
            value={league.title}
          />
          <TextField
            label="Date to start"
            placeholder="July 1 2022"
            name="dateToStart"
            onChange={handleInputChange}
            value={league.dateToStart}
          />

          <TextField
            label="Date to end"
            placeholder="July 1 2022"
            name="dateToEnd"
            onChange={handleInputChange}
            value={league.dateToEnd}
          />

          <SelectField
            label="Game per team"
            options={['1', '2', '3', '4']}
            name="gamePerTeam"
            onChange={handleInputChange}
            value={league.gamePerTeam}
          />
          <SelectField
            label="Num of Participants"
            options={['2', '3', '4', '5', '6', '7', '8', '9', '10']}
            name="numOfteamsParticipating"
            onChange={handleInputChange}
            value={league.numOfteamsParticipating}
          />

          {/* {factorial(league.numOfteamsParticipating) / (factorial(league.numOfteamsParticipating) * (factorial(league.numOfteamsParticipating - league.gamePerTeam))) } */}

          <TextAreaField
            label="etc"
            defaultValue="Amplify UI is awesome!"
            name="etc"
            onChange={handleInputChange}
            value={league.etc}
          />
          <input type="submit" value="Submit" />
        </Flex>
      </form>
    </div>
  );
}

function factorial(r) {
  let s = 1;
  while (r > 1) s *= r--;
  return s;
}

function combinations(n,r){
    let s = 1;
    let i = r;
    // n*(n-1)*....*(n-r+1)
    while(i<n) s*=++i;
    return s/factorial(n-r)
}

console.log(combinations(league.numOfteamsParticipating, 2));