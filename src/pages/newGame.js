import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function NewGame() {
  const [title, setTitle] = useState('');
  const [opponent, setOpponent] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    name == 'title' ? setTitle(target.value) : setOpponent(target.value);
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    // do sth and clear input
    e.preventDefault();
    setTitle('');
    setOpponent('');
  };

  let location = useLocation() 
  let navigate = useNavigate();

  const handleDismiss = () => {
    // console.log('navigate(-1)', navigate(-1))
    navigate(-1);
    console.log('loca', location)
    
    // navigate('/teams/t01', { replace: true })
  };

  return (
    <main style={{ padding: '1rem 0' }}>
      <button onClick={handleDismiss}>dismiss </button>
      <h2>New game</h2>
      <div>invite a team </div>
      <form onSubmit={handleSubmit}>
        <label>
          title:
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
            value={title}
          />
        </label>
        <br />
        <label>
          opponent:
          <input
            type="text"
            name="opponent"
            onChange={(e) => handleInputChange(e)}
            value={opponent}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </main>
  );
}
