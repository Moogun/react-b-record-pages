import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const handleDismiss = () => {
    navigate(-1);
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
