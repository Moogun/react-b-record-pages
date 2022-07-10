import React, { useContext } from 'react';
import { AuthContext } from '../authProvider.js';
import { useSelector, useDispatch } from 'react-redux';
import { getLeague } from './leagueSlice';
import { useParams, useNavigate } from 'react-router-dom';

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
    <main style={{ padding: '1rem 0' }}>
      <h3>
        {' '}
        {league.title} -{league.status}
      </h3>

      <h4> filled slots</h4>
      {league.status &&
        league.teamsParticipating.map((t) => <span> {t} </span>)}

      <h4> Standing </h4>
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

      <h4> game schedule and result </h4>
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

              <td>{g.win.name} </td>
              <td> {g.venue} </td>
            </tr>
          ))}
      </table>

      {/* <button onClick={handleNewGame}>new game</button> */}
      {/* <div> */}

      {/* {admin ? <button> new league </button> : ""} */}
      {/* </div> */}

      {/* 

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
      </div> */}
    </main>
  );
}
