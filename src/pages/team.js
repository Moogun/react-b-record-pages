import React, { useContext } from 'react';
import { AuthContext } from '../authProvider.js';
import { useSelector, useDispatch } from 'react-redux';
import { getTeam } from './teamSlice';
import { useParams, useNavigate } from 'react-router-dom';

import { Flex, View, Button, Card, Text, useTheme } from '@aws-amplify/ui-react';

import { PageHeader } from '../pageHeader.js';

export default function team() {
  let auth = useContext(AuthContext);
  console.log('[team auth]', auth);
  const { tokens } = useTheme();

  let myTeams = auth.user.myTeams;

  let navigate = useNavigate();
  let params = useParams();

  let team = useSelector((state) => {
    return state.teams.selected;
  });

  let isMyTeam = team ? checkMyTeam(myTeams, team) : null;

  const handleJoin = () => {
    console.log(params);
    navigate(`${location.pathname}/join`, { replace: false, state: team });
  };

  return (
    <main style={{ padding: '1rem 0' }}>
      <PageHeader 
      // title={team && team.name} 
      title="팀"
      />

      <View backgroundColor={tokens.colors.brand.primary[20]}>

      <Flex
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
        gap="0rem"
      >

        <Card 
          margin={tokens.space.small}
        >
        <img src={} />
        </Card>

        <View margin={tokens.space.small}>
          <Text> 팀 이름 </Text>

          <Text style={{ fontSize: '0.8rem', color: 'gray' }}>
            {' '}
            Fixed toolbar mode{' '}
          </Text>
        </View>
      </Flex>


      <Flex
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
        gap="0rem"
      >
        <View margin={tokens.space.small}>

        <Button > Overview </Button> 
        <Button > 경기 현황 </Button> 
        <Button > 리그  </Button> 
        <Button > 선수  </Button> 
      </View>

      </Flex>
{/*         
      <Text> 참여중인 리그</Text>

{team ? team.players.map((p) => (
  <Text key={p.id}> {p.username} </Text>
)) : null} */}

      </View>

      <View backgroundColor={tokens.colors.brand.primary[20]}>

        <Card backgroundColor={tokens.colors.brand.primary[80]}>
          <Text> 경기 </Text>
          {team && team.games.map((g) => (
            <button key={g}> {g} </button>
          ))}
        </Card>

      </View>
      <br />

      <View backgroundColor={tokens.colors.brand.primary[20]}>
      <Card backgroundColor={tokens.colors.brand.secondary[60]}>
        <Text> 선수 </Text>

        {team && team.players.map((p) => (
          <Text key={p.id}> {p.username} </Text>
        ))}

        <br />
        <Button isFullWidth onClick={handleJoin}>
          {' '}
          Join{' '}
        </Button>
      </Card>
      
      </View>
    </main>
  );
}

function checkMyTeam(myTeams, selectedTeam) {
  let teamIds = [];
  let status = false;

  myTeams.map((t) => {
    teamIds.push(t.id);
  });
  status = teamIds.includes(selectedTeam.id);
  return status;
}
