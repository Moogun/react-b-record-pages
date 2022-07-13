import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewTeam() {
  
  const [teamName, setTeamName] = useState()
  const [location, setLocation] = useState()

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    name == 'teamName' ? setTeamName(target.value) : setLocation(target.value);
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    // do sth and clear input
    console.log(teamName, location)
    e.preventDefault();
    setTeamName('');
    setLocation('');
  };

  let navigate = useNavigate();

  const handleDismiss = () => {
    // navigate(-1);
    navigate('/', { replace: true });
  };

  
  return (
    <div>
      <h5>new team</h5>

      <main style={{ padding: '1rem 0' }}>
        <button onClick={handleDismiss}>dismiss </button>
        <div>new team </div>
        <form onSubmit={handleSubmit}>
          <label>
            Team Name:
            <input
              type="text"
              name="teamName"
              onChange={handleInputChange}
              value={teamName}
            />
          </label>
          <br />
          <label>
            Location:
            <input
              type="text"
              name="location"
              onChange={(e) => handleInputChange(e)}
              value={location}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
}
