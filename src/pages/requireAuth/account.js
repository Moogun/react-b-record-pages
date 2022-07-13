import React, { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../authProvider.js';
import {
  Card,
  View,
  Heading,
  Flex,
  Badge,
  Text,
  Button,
  useTheme,
} from '@aws-amplify/ui-react';

export default function Account() {
  let auth = useContext(AuthContext);
  console.log('[Account]', auth);

  let navigate = useNavigate()
  
  const handleNew= (what) => {
    navigate(`../${what}/home/create`, {replace: true})
  }
  const handleNewLeague = () => {
    navigate('../league/home/create', {replace: true})
  }
  const handleNewTeam = () => {
    navigate('../team/home/create', {replace: true})
  }

  return (
    <div>
      Account
      <nav>
      <Button onClick={handleNewLeague} isFullWidth > newLeague</Button>
      <Button onClick={handleNewTeam} isFullWidth > newTeam</Button>

        <Link to="profile">Profile</Link> { "|"}
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}
