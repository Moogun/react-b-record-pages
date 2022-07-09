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

  console.log('league', league)
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
        {league.title}
      </h3>

      {/* <button onClick={handleNewGame}>new game</button> */}
      <div>
        
        {/* {admin ? <button> new league </button> : ""} */}
      </div>
      
      {/* <div style={{ border: 'solid 1px' }}>
        Leagues participating
        <div>none yet</div>
      </div>

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
