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
  Image,
  Heading,
  Flex,
  Badge,
  Text,
  Button,
  useTheme,
} from '@aws-amplify/ui-react';
import logo from './logo.svg';

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
            marginTop={tokens.space.small}
            onClick={() => handleClick(l.id)}
          >
            <Card>
              <Flex direction="row" alignItems="flex-start">
                <Image alt="Road to milford sound" src={logo} width="20%" />
                <Flex
                  direction="column"
                  alignItems="flex-start"
                  // gap={tokens.space.xs}
                  gap="0.2rem"
                >
                  <Heading level={5}>{l.title}</Heading>

                  <Text as="span">{l.description} </Text>

                  <Text as="span">
                    기간: {l.leagueToStart} - {l.leagueToEnd}{' '}
                  </Text>
                  <Text as="span">
                    신청: {l.appToStart} - {l.appToEnd}{' '}
                  </Text>
                </Flex>
              </Flex>
            </Card>

            {/* <Heading level={5}>{l.title}</Heading>
            <Text as="p">
              {l.status} / teams: {l.numOfteamsParticipating}
            </Text>
            <Text as="span">game per team : {l.gamePerTeam}</Text>

            <Text as="p">
              app {l.appToStart}, {l.appToStart}
            </Text>

            <Text as="p">
              league {l.dateToStart}, {l.dateToEnd}
            </Text> */}
          </View>
        </NavLink>
      ))}
    </div>
  );
}
