import React, { useContext } from 'react';
import { AuthContext } from '../authProvider.js';
import { useSelector, useDispatch } from 'react-redux';
import { getTeam } from './teamSlice';
import { useParams, useNavigate } from 'react-router-dom';

export default function team() {
  // let auth = useContext(AuthContext);
  // console.log('[team]', auth);

  let navigate = useNavigate();
  let params = useParams();

  // let team = useSelector((state) => {
  //   return state.teams.selected;
  // });

  // let teamId = 't01'
  // const handleNewGame = () => {
  //   navigate('/teams/' + teamId + '/newgame');
  // };

  // navigating back to nested routes cause indifinite re-rendering
  const handleNewLeague = () => {
    navigate('/newleague');
  };

  console.log('0 --- [params]', params.teamId)
  // console.log('team manager length', team.manager.length)
  // let admin = team.manager.find((i => {
  //   return i.id == auth.user.id 
  // })) 
  // console.log('--- admin', 'admin')
  // console.log('---', 1)

  return (
    <main style={{ padding: '1rem 0' }}>
      <h3>
        {' '}
        {team.id} {team.name}
      </h3>

      
        {/* {admin ? <button onClick={handleNewLeague}> new league </button> : ""} */}
        <button onClick={handleNewLeague}> new league </button> 
      
      <div style={{ border: 'solid 1px' }}>
        Leagues participating
        <div>none yet</div>
      </div>
{/* 
      <div style={{ border: 'solid 1px' }}>
        Players
        <div>
          {team.players.map((p) => (
            <button key={p.id}> {p.name} </button>
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
