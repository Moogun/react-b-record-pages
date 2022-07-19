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
      title="나의 팀"
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

      <Button > Overview </Button> 
      <Button > abc </Button> 
      <Button > abc </Button> 

      </Flex>
{/*         
      <Text> 참여중인 리그</Text>

{team ? team.players.map((p) => (
  <Text key={p.id}> {p.username} </Text>
)) : null} */}

      </View>

      <Card>
        <h4> Games </h4>
        {team && team.games.map((g) => (
          <button key={g}> {g} </button>
        ))}
      </Card>

      <Card>
        <h4> 선수 명단</h4>

        {team && team.players.map((p) => (
          <Text key={p.id}> {p.username} </Text>
        ))}

        <br />
        <Button isFullWidth onClick={handleJoin}>
          {' '}
          Join{' '}
        </Button>
      </Card>
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
