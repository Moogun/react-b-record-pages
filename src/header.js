import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { useTheme, Text, View } from '@aws-amplify/ui-react';
import './style.css';

export function Header({ auth }) {
  const { tokens } = useTheme();
  return (
    <nav>
      <Link to="/" className="link-local-styles">
        Fineplay
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
        리그/팀 만들기
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
          나의 리그
        </Link>
      ) : null}
      <Link to="/leagues" className="link-local-styles-subheader">
        리그
      </Link>
      <Link to="/teams" className="link-local-styles-subheader">
        팀 
      </Link>
    </nav>
  );
}
