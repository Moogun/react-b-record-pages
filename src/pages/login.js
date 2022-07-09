import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../authProvider.js';

export default function Login() {
    let auth = useContext(AuthContext);
  // console.log('[login] auth', auth)

  let navigate = useNavigate();
  let location = useLocation();
  // console.log('location loca', location)
  let from = location.state.from.pathname || '/';

  const [u, setU] = useState({})

  const handleOnChange = (e) => {
    let value = e.target.value
    setU({
      ...u, 
      [e.target.name]: value,
    })
    // console.log('[login handleChange] ', u.username, u.password)
    e.preventDefault()
  };

  // const handleOnClick = () => {
  //   // auth.signin('username', () => {
  //   //   navigate(from, { replace: true });
  //   // });
  // };

  // if (auth.user) {
  //   handleOnClick();
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("from", from)
    auth.signin(u, () => {
      navigate(from, { replace: true });
    });
    setU({})
  };
  // console.log('[login] username-', u.username, ': pass-', u.password)
  return (
    <div>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" value={u.username} onChange={handleOnChange}/>
        </label>{' '}
        <label>
          Password: <input name="password" type="text" value={u.password} onChange={handleOnChange}/>
        </label>{' '}
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
