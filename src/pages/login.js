import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../authProvider.js';

export default function Login() {
    let auth = useContext(AuthContext);
  console.log('[login] auth', auth)

  let navigate = useNavigate();
  let location = useLocation();
  console.log('location loca', location)
  let from = location.state.from.pathname || '/';

  // const [u, setU] = useState({})
  // setU(auth.user)

  // const handleOnChange = (e) => {
  //   let value = e.target.value
  //   setU({
  //     ...u, 
  //     [e.target.name]: value,
  //   })
  //   e.preventDefault()
  // };

  // const handleOnClick = () => {
  //   // auth.signin('username', () => {
  //   //   navigate(from, { replace: true });
  //   // });
  // };

  if (auth.user) {
    console.log('auth user ??')
    navigate('/', {replace: true})
    // handleOnClick();
  } else {
    console.log('auth user else ??')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("from", from)
    auth.signin(auth.user, () => {
      // navigate(from, { replace: true });
      // navigate to home instead of where the user was
      navigate('/', { replace: true });
    });
    setU({})
  };
  // console.log('[login] username-', u.username, ': pass-', u.password)
  return (
    <div>

      {/* <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" value={u.username} onChange={handleOnChange}/>
        </label>{' '}
        <label>
          Password: <input name="password" type="text" value={u.password} onChange={handleOnChange}/>
        </label>{' '}
        
        <button type="submit">Login</button>
      </form> */}
    </div>
  );
}
