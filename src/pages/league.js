import React, { useContext } from 'react';
import { AuthContext } from '../authProvider.js';
import { useSelector, useDispatch } from 'react-redux';
import { getLeague } from './leagueSlice';
import {
  useParams,
  useNavigate,
  useLocation,
  Navigate,
} from 'react-router-dom';
import { bg_lb, bg_dw } from '../style';

import {
  Collection,
  Card,
  Heading,
  Text,
  Badge,
  Button,
  Grid,
  View,
  useTheme,
} from '@aws-amplify/ui-react';

export default function team() {
  let auth = useContext(AuthContext);

  let navigate = useNavigate();
  const location = useLocation();
  let params = useParams();

  let league = useSelector((state) => {
    return state.leagues.selected;
  });

  console.log('hash', location.hash);
  console.log('pathname', location.pathname);
  console.log('search', location.search);

  // console.log('params.teamId', params.teamId);
  // console.log('team.manager', team.manager);
  // console.log('team.manager', team.manager[0] === auth.user.id);
  // let admin = league.manager.find((i => i == auth.user.id))

  const handleEdit = () => {
    console.log(params);
    navigate(`${location.pathname}/edit`, { replace: true, state: league });
  };

  return (
    <main>

      {/* <Button onClick={handleEdit}> Edit </Button> */}

      <Card key={league.id} style={bg_dw}>
        
        <Heading level={4}>
          {league.title}{' '}
          <Badge size="small" variation="info">
            {league.status}
          </Badge>
        </Heading>

        <Info league={league} />
      </Card>

      <div style={bg_dw}>
        <h4> filled slots</h4>

        {league.status &&
          league.teamsParticipating.map((t) => <span> {t} </span>)}
      </div>
      <div style={bg_dw}>
        <h4> Standing </h4>
        {league.status == 'receivingApp' ? (
          <p> leauge hasn't started</p>
        ) : (
          <Standing league={league} />
        )}
      </div>

      <div style={bg_dw}>
        <h4> game schedule and result </h4>
        <GameSchedule league={league} />
      </div>
    </main>
  );
}

function Info({ league }) {
  return (
    <div>
      <h4> League info</h4>
      <Text> 참가 팀 {league.numOfteamsParticipating}</Text>

      <Text>
        잔여 자리
        {league.numOfteamsParticipating - league.teamsParticipating.length}{' '}
        </Text>
        <Text> 참가 조건 1,2,3 </Text>
      {/* <Button> Join </Button> */}
    </div>
  );
}

function Standing({ league }) {
  // console.log('league.teams', league.teamsParticipating)
  // console.log('league.games', league.games)
  // let st = []

  // league.games.map(g => {
  //   g.teams.map(t => {
  //     console.log('t', t.name)
  //   })
  //   console.log(g.win.name)
  // })

  return (
    <table>
      <tr>
        <th>Team name</th>
        <th>Num of Games</th>
        <th>Points</th>
        <th>Won</th>
        <th>Lost</th>
      </tr>
      <tr>
        <td>Team 1 </td>
        <td>2</td>
        <td>6</td>
        <td>2</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Team 2 </td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>2</td>
      </tr>
    </table>
  );
}

function GameSchedule({ league }) {
  return (
    <table>
      <tr>
        <th>Date</th>
        <th>Time</th>
        <th>경기</th>
        <th>장소</th>
      </tr>

      {league.status &&
        league.games.map((g) => (
          <tr key={g.id}>
            <td>{g.date} </td>
            <td>{g.time} </td>

            <td> null</td>
            <td> {g.venue} </td>
          </tr>
        ))}
    </table>
  );
}

{
  /* <button onClick={handleNewGame}>new game</button> */
}
{
  /* <div> */
}

{
  /* {admin ? <button> new league </button> : ""} */
}
{
  /* </div> */
}

{
  /* 

      <div style={{ border: 'solid 1px' }}>
        Players
        <div>
          {team.players.map((p) => (
            <button> {p.name} </button>
          ))}
        </div>
      </div>

      <div style={{ border: 'solid 1px' }}>
        Games
        <div>
          {team.games.map((g) => (
            <button key={g}> {g} </button>
          ))}
        </div>
      </div> */
}
