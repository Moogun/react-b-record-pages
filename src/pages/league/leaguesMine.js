import React, { useContext } from 'react';
import { AuthContext } from '../../authProvider.js';
import { useSelector, useDispatch } from 'react-redux';
import { selectLeague } from './leagueSlice';

import { NavLink, useSearchParams, useNavigate } from 'react-router-dom';

import {
  Card,
  Image,
  View,
  Heading,
  Flex,
  Text,
  useTheme,
} from '@aws-amplify/ui-react';
import logo from './logo.svg';

import { PageHeader, DescriptionBadge, DescriptionText } from '../../pageHeader.js';

export default function LeaguesMine() {
  const auth = useContext(AuthContext);
  console.log('[lg mine]', auth.user);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  // let leagues = useSelector((state) => {
  //   return state.leagues.list;
  // });
  let myLeagues = auth.user.myLeagues;

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
      {/* <PageHeader title={'나의 리그'} />*/}


      
      {myLeagues &&
        myLeagues.map((l) => (
          <NavLink
            style={{ textDecoration: 'none' }}
            to={`/leagues/${l.id}`}
            key={l.id}
          >
            <View
              // backgroundColor={tokens.colors.background.secondary}
              paddingTop={tokens.space.medium}
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
