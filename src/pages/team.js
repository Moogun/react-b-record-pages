import React, { useContext } from 'react';
import { AuthContext } from '../authProvider.js';
import { useSelector, useDispatch } from 'react-redux';
import { getTeam } from './teamSlice';
import { useParams, useNavigate } from 'react-router-dom';

import { Button, Card, Text } from '@aws-amplify/ui-react';

import { PageHeader } from '../pageHeader.js';

export default function team() {
  let auth = useContext(AuthContext);
  console.log('[team auth]', auth);

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
      <PageHeader title={team && team.name} />

      <Card>
        <h4> 참여중인 리그</h4>

        {team ? team.players.map((p) => (
          <Text key={p.id}> {p.username} </Text>
        )) : null}
      </Card>

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
