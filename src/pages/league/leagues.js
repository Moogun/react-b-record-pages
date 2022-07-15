import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLeague } from './leagueSlice';

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

import { PageHeader } from '../../pageHeader.js';

export default function Leagues() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  let leagues = useSelector((state) => {
    return state.leagues.list;
  });

  let [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (leagueId) => {
    dispatch(selectLeague(leagueId));
    navigate('/leagues/' + leagueId);
  };

  const handleSubmit = () => {};

  const handleSth = () => {
    navigate(-1);
  };

  const { tokens } = useTheme();

  return (
    <div>
      <PageHeader title={'리그'} />

      {leagues.map((l) => (
        <NavLink
          style={{ textDecoration: 'none' }}
          to={`/leagues/${l.id}`}
          key={l.id}
        >
          <View
            backgroundColor={tokens.colors.background.secondary}
            padding={tokens.space.medium}
            marginTop={tokens.space.small}
            onClick={() => handleClick(l.id)}
          >
            <Heading level={5}>{l.title}</Heading>
            <Text as="p">
              {l.status} / teams: {l.numOfteamsParticipating}
            </Text>
            <Text as="span">game per team : {l.gamePerTeam}</Text>

            <Text as="p">
              app {l.appToStart}, {l.appToStart}
            </Text>

            <Text as="p">
              league {l.dateToStart}, {l.dateToEnd}
            </Text>
          </View>
        </NavLink>
      ))}
    </div>
  );
}
