import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { AuthContext } from '../../authProvider.js';

export default function Account() {
  let auth = useContext(AuthContext);
  console.log('[Account]', auth);
  return (
    <div>
      Account
      <nav>
        <Link to="profile">Profile</Link> { "|"}
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}
