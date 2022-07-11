import React, { useContext } from 'react';
import { AuthContext } from '../authProvider.js';
import { useSelector, useDispatch } from 'react-redux';
import { getLeague } from './leagueSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { bg_lb, bg_dw } from '../style';

import { SelectField, Flex } from '@aws-amplify/ui-react';

export default function team() {
  let auth = useContext(AuthContext);

  let navigate = useNavigate();
  let params = useParams();

  let league = useSelector((state) => {
    return state.leagues.selected;
  });

  console.log('league', league);
  // const handleNewGame = () => {
  //   navigate('/newgame');
  // };

  // console.log('params.teamId', params.teamId);
  // console.log('team.manager', team.manager);

  // console.log('team.manager', team.manager[0] === auth.user.id);

  // let admin = league.manager.find((i => i == auth.user.id))

  return (
    <main style={bg_lb}>
      <h3>
        {' '}
        {league.title} -{league.status}
      </h3>

      <div style={bg_dw}>
        <h4> League info</h4>
        <Info league={league} />
      </div>

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
      <p> 참가 팀 {league.numOfteamsParticipating} </p>
      <p> 잔여 자리 {league.numOfteamsParticipating - league.teamsParticipating.length} </p>
      <p> 참가 조건 1,2,3 </p>
      <button> Join </button>
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
