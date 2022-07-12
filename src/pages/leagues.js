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
  
      {leagues.map((l) => (
        <NavLink to={`/leagues/${l.id}`} key={l.id}>
          <View
            backgroundColor={tokens.colors.background.secondary}
            padding={tokens.space.medium}
            margin={tokens.space.small}
            onClick={() => handleClick(l.id)}
          >
            <Heading level={5}>{l.title}</Heading>
            <Text as="p">status : {l.status} / teams: {l.numOfteamsParticipating}</Text>
            <Text as="span">game per team : {l.gamePerTeam}</Text>

            <Text as="p">
              {l.dateToStart}, {l.dateToEnd}
            </Text>
            <Text as="p">
              {l.teamsParticipating}{' '}
            </Text>
          </View>
        </NavLink>
      ))}
    </div>
  );
}
