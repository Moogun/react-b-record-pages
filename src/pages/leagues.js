import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLeague } from './leagueSlice';

import {
  NavLink,
  Link,
  Outlet,
  useSearchParams,
  useNavigate,
} from 'react-router-dom';

import { bg_lb } from '../style';
import {
  Card,
  View,
  Heading,
  Flex,
  Badge,
  Text,
  Button,
  useTheme,
} from '@aws-amplify/ui-react';

export default function Leagues() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  let leagues = useSelector((state) => {
    return state.leagues.list;
  });

  let [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (leagueId) => {
    dispatch(getLeague(leagueId));
    navigate('/leagues/' + leagueId);
  };

  const handleSubmit = () => {};

  const handleSth = () => {
    navigate(-1);
  };

  const { tokens } = useTheme();

  return (
    <div>
      <Text as="p"> leagues </Text>
      {/* <button onClick={handleSth}> dismiss </button> */}
      <div>
        {/* <h5>new league </h5>
        <form onSubmit={handleSubmit}>
          <label>
            title: <input name="title" type="text" />
          </label>{' '}
          <button type="submit">create a new league</button>
        </form> */}
        {/* 
        {leagues.map((l) => (
          <Card>
            <NavLink
              to={`/leagues/${l.id}`}
              key={l.id}
              onClick={() => handleClick(l.id)}
            >
              <div>
                <p> {l.title}</p>
                <div>
                  {' '}
                  'game per team' : {l.gamePerTeam} , {l.dateToStart},{' '}
                  {l.numOfteamsParticipating}, {l.teamsParticipating}{' '}
                </div>
              </div>
            </NavLink>
          </Card> */}
        {/* ))} */}
      </div>

      {leagues.map((l) => (
        <NavLink to={`/leagues/${l.id}`} key={l.id}>
          <View
            backgroundColor={tokens.colors.background.secondary}
            padding={tokens.space.medium}
            margin={tokens.space.small}
            onClick={() => handleClick(l.id)}
          >
            <Heading level={5}>{l.title}</Heading>
            <Text as="p">'game per team' : {l.gamePerTeam}</Text>
            <Text as="p">'game per team' : {l.gamePerTeam}</Text>

            <Text as="p">
              {l.dateToStart}, {l.numOfteamsParticipating},{' '}
              {l.teamsParticipating}{' '}
            </Text>
          </View>
        </NavLink>
      ))}
    </div>
  );
}
