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

import { PageHeader, DescriptionBadge, DescriptionText } from '../../pageHeader.js';

export default function Leagues() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  let leagues = useSelector((state) => {
    return state.leagues.list;
  });

  let [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (leagueId) => {
    dispatch(selectLeague(leagueId));
    navigate('/leagues/' + leagueId, {state: ''});
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
            <Card variation='elevated'>
              <Flex direction="row" alignItems="flex-start">
                <Image alt="Road to milford sound" src={logo} width="10%" height="10%"/>
                <Flex
                  direction="column"
                  alignItems="flex-start"
                  // gap={tokens.space.xs}
                  gap="0.2rem"
                >
                  <Heading level={5}>{l.title}</Heading>

                  {/* <Flex>
                    {descriptionBadge('info', l.description)}
                    {descriptionBadge('info', '접수중')}
                  </Flex> */}
                  <DescriptionText text1={'대회'} text2={l.leagueToStart} text3={l.leagueToEnd} />
                  <DescriptionText text1={'신청'} text2={l.appToStart} text3={l.appToEnd} />
                </Flex>
              </Flex>
            </Card>

          </View>
        </NavLink>
      ))}
    </div>
  );
}
