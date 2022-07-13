import React, { useContext } from 'react';
import { AuthContext } from '../../authProvider.js';
import { useSelector, useDispatch } from 'react-redux';
import { getLeague } from './leagueSlice';

import { NavLink, useSearchParams, useNavigate } from 'react-router-dom';

import {
  Card,
  Image,
  View,
  Heading,
  Flex,
  Badge,
  Text,
  Button,
  useTheme,
} from '@aws-amplify/ui-react';
import logo from './logo.svg';

export default function LeaguesMine() {
  const auth = useContext(AuthContext);
  console.log('[lg mine]', auth.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  let leagues = useSelector((state) => {
    return state.leagues.list;
  });
  let myTeam = auth.user.myTeam;

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
      <h5>My leagues</h5>
      {myTeam &&
        myTeam.map((t) => (
          <View
            backgroundColor={tokens.colors.background.secondary}
            padding={tokens.space.medium}
          >
            <Card>
              <Flex direction="row" alignItems="flex-start">
                <Image alt="Road to milford sound"
                src={logo} width="20%" />
                <Flex
                  direction="column"
                  alignItems="flex-start"
                  gap={tokens.space.xs}
                >
                  <Heading level={5}>{t.name}</Heading>

                  <Text as="span">owy peaks on New Zealand.</Text>
                </Flex>
              </Flex>
            </Card>
          </View>
        ))}
    </div>
  );
}
