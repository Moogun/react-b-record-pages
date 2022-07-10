import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLeague } from './leagueSlice';

import {
  NavLink,
  Link,
  Outlet,
  useSearchParams,
  useNavigate,
} from 'react-router-dom';

export default function Leagues() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  let leagues = useSelector((state) => {
    return state.leagues.list;
  });

  let [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (leagueId) => {
    dispatch(getLeague(leagueId));
    navigate('/leagues/' + leagueId);
  };

  const handleSubmit = () => {};

  const handleSth = () => {
    navigate(-1)
  }
  return (
    <div>
      <h5>leagues</h5>
      {/* <button onClick={handleSth}> dismiss </button> */}
      <div>
        {/* <h5>new league </h5>
        <form onSubmit={handleSubmit}>
          <label>
            title: <input name="title" type="text" />
          </label>{' '}
          <button type="submit">create a new league</button>
        </form> */}

        {leagues.map((l) => (
          <NavLink 
          to={`/leagues/${l.id}`}
          key={l.id}
          onClick={() => handleClick(l.id)}
>
          <div>
            <p> {l.title}</p>
            <div> 'game per team' : {l.gamePerTeam} , {l.dataToStart}, {l.numOfteamsParticipating}, {l.teamsParticipating} </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
