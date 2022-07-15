import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@aws-amplify/ui-react';
import { AiOutlineUser } from 'react-icons/ai';

import './style.css';

export function Header({ auth }) {
  const { tokens } = useTheme();
  return (
    <nav>
      <Link to="/" className="link-local-styles">
        Home
      </Link>

      <Link
        to="/account"
        style={{ float: 'right' }}
        className="link-local-styles"
      >
        <AiOutlineUser /> {auth.user ? auth.user.username : 'Login'}
      </Link>

      <Link
        to="create/home"
        style={{ float: 'right', marginRight: '1rem', color: 'red' }}
        className="link-local-styles"
      >
        Create New
      </Link>
    </nav>
  );
}

export function SubHeader({ auth }) {
  return (
    <nav
      style={{
        borderColor: 'lightGray',
        // paddingRight: '2rem',
      }}
    >
      {auth.user ? (
        <Link to="/leaguesmine" className="link-local-styles-subheader">
          My Leagues
        </Link>
      ) : null}
      <Link to="/leagues" className="link-local-styles-subheader">
        Leagues
      </Link>
      <Link to="/teams" className="link-local-styles-subheader">
        Teams
      </Link>
    </nav>
  );
}

export function Footer() {
  return <div> -------- footer --------</div>;
}
