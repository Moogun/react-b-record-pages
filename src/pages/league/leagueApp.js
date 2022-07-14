import React, {useContext} from 'react';
import { AuthContext } from '../../authProvider.js';
import { View, Heading, useTheme } from '@aws-amplify/ui-react';
import { PageHeader } from '../../pageHeader.js';

export default function LeagueApp({  }) {
  let auth = useContext(AuthContext);
  const { tokens } = useTheme();

  console.log('[league app]', auth)
  let myTeam = auth.user.myTeam
  console.log('[league app]', myTeam)

  return (
    <div> 
      <PageHeader title="---" />
    </div>
  
  );
}
