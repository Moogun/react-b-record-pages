import React, { useState } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';

export default function NewLeague() {
  const [league, setLeague] = useState({
    id: '',
    title: '',
    gamePerTeam: 1,
    dateToStart: '',
    numOfteamsParticipating: 4,
    teamsParticipating: [],
    games: [],
  });
  // const [location, setLocation] = useState()

  const handleInputChange = (e) => {
    //   const target = e.target;
    //   const name = target.name;
    //   name == 'teamName' ? setTeamName(target.value) : setLocation(target.value);
    //   e.preventDefault();
  };

  const handleSubmit = (e) => {
    //   // do sth and clear input
    //   console.log(teamName, location)
    //   e.preventDefault();
    //   setTeamName('');
    //   setLocation('');
  };

  let navigate = useNavigate();
  let location = useLocation();

  const handleDismiss = () => {
    
    // 1. navigate here, navigate back to account then set user null, therafter navigate to /login 
    // <Navigate />doesn't work here either 
    // 2. navigate(-1);
    // ------- note : <a href> instead of <Link> will rerender the whole page, said by some
    
    // this works for now 
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h5>new league</h5>
      <button onClick={handleDismiss}>dismiss </button>

      <main style={{ padding: '1rem 0' }}>
        <div>new league </div>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              onChange={handleInputChange}
              value={league.title}
            />
          </label>
          <br />
          <label>
            gamePerTeam: 
            <input
              type="text"
              name="gamePerTeam"
              onChange={handleInputChange}
              value={league.gamePerTeam}
            />
          </label>
          <br />
          <label>
          dateToStart: 
            <input
              type="text"
              name="dateToStart"
              onChange={handleInputChange}
              value={league.dateToStart}
            />
          </label>
          <br />
          <label>
          numOfteamsParticipating

            <input
              type="text"
              name="numOfteamsParticipating"
              onChange={handleInputChange}
              value={league.numOfteamsParticipating}
            />
          </label>
          <br />
          {/* <label>
            Location:
            <input
              type="text"
              name="location"
              onChange={(e) => handleInputChange(e)}
              value={location}
            />
          </label> */}
          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
}
