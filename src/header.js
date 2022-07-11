import React from 'react'
import {
  Link,
} from 'react-router-dom';

import {bg_lb} from './style'

export function Header({auth}) {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <Link to="/">Home</Link> {' | '}
      <Link to="/account">
        {' '}
        {auth.user ? auth.user.username : 'Login'}
      </Link>{' '}
      {' | '}
    </nav>
  );
}

export function SubHeader({auth}) {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      {auth.user ? <Link to="/leaguesmine">My Leagues</Link> : null } {' | '}
      <Link to="/leagues">Leagues</Link> {' | '}
      <Link to="/teams">Teams</Link> {' | '}
      <Link to="/newteam">New Team</Link> {' | '}
    </nav>
  );
}

export function Footer() {
  return (
    <div style={bg_lb}> -------- footer --------  </div>
  );
}
