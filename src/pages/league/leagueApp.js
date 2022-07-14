import React, {useContext} from 'react';
import { AuthContext } from '../../authProvider.js'

import { PageHeader } from '../../pageHeader.js';
import { View, Heading, useTheme, Card, CheckboxField, Button } from '@aws-amplify/ui-react';

export default function LeagueApp({  }) {
  let auth = useContext(AuthContext);
  
  let myTeams = auth.user.myTeams
  let tt =  managingTeam(auth, myTeams)
  
  const handleChoose = (id) => {
      console.log(id)
  }
  
  const { tokens } = useTheme();
  return (
    <div> 
      <PageHeader title={"신청"} />
      <CheckboxField label="Subscribe" name="subscribe" value="yes" /> 
      {/* const [checked, setChecked] = React.useState(false);
  return (
    <CheckboxField
      name="subscribe-controlled"
      value="yes"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      label="Subscribe"
    />
  ); */}


      {tt.map(t => {
        return <Card key={t.id} onClick={() =>handleChoose(t.id)}> {t.name} </Card>
      })}
      <Button > 신청 완료 </Button>
    </div>
  );
}

function managingTeam(auth, myTeams) {
  
  let appliableTeam = []

  let myId = auth.user.id

  myTeams.map(t => {
    console.log('t', t)
    t.managers.map(mgr => {
      console.log('mgr == myId', mgr==myId)
      mgr==myId ? appliableTeam.push(t) : null
    })
  })
  return appliableTeam
}