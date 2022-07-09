import React, { useContext } from 'react';
import {
  useNavigate,
  useLocation,
  Navigate, 
} from 'react-router-dom';

export default function AuthStatus({AuthContext}) {
  let auth = useContext(AuthContext);
  let navigate = useNavigate();
  // console.log('[authStatus]-', auth)
  if (!auth.user) {
    return <p> </p>;
  }

  return (
    <p>
      {' '}
      Welcome{' '} {auth.user.username}
      <button onClick={() => { auth.signout(() => navigate('/')); }}>
        sign out
      </button>{' '}
    </p>
  );
}