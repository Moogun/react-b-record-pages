import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLeague } from './leagueSlice';

import {
  NavLink,
  useSearchParams,
  useNavigate,
} from 'react-router-dom';

export default function LeaguesMine() {
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
      <h5>My leagues</h5>
      
    </div>
  );
}
