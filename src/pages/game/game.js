import React, { useContext, useState } from 'react';
import { AuthContext } from '../../authProvider.js';
// import { useDispatch } from 'react-redux';
// import { appLeague } from './leagueSlice';

import { PageHeader } from '../../pageHeader.js';
import {
  View,
  Heading,
  useTheme,
  Card,
  Radio,
  RadioGroupField,
  Button,
} from '@aws-amplify/ui-react';

export default function Game({}) {
  let auth = useContext(AuthContext);

  const { tokens } = useTheme();
  return (
    <div>
      game
    </div>
  );
}
