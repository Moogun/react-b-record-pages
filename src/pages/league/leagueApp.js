import React, { useContext, useState } from 'react';
import { AuthContext } from '../../authProvider.js';
import { useDispatch } from 'react-redux';
import { appLeague } from './leagueSlice';

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

export default function LeagueApp({}) {
  let auth = useContext(AuthContext);

  let myTeams = auth.user.myTeams;
  let tt = getManagingTeam(auth, myTeams);

  const [selected, setTeam] = useState('');
  
  let dispatch = useDispatch()

  const handleChoose = () => {
    console.log('handleChoose', selected);
    let t = getTeam(myTeams, selected)
    dispatch(appLeague(t))
  };

  const { tokens } = useTheme();
  return (
    <div>
      <PageHeader title={'신청'} />
      
      <br />
      <RadioGroupField
        label="다음 팀 중 선택하세요"
        name="selected"
        value={selected}
        onChange={(e) => setTeam(e.target.value)}
      >
        {tt.map((t) => {
          return <Radio value={t.name}> {t.name}</Radio>;
        })}
      </RadioGroupField>

      <br />

      <Button isDisabled={ selected.length > 2 ? false : true} onClick={handleChoose}> 신청 완료 </Button>
    </div>
  );
}

function getTeam(myTeams, tName) {
  let team = null 

  myTeams.map((t) => {
      t.name == tName ? team = t : t = null
      console.log('team',team);
    });
  return team
}

function getManagingTeam(auth, myTeams) {
  let appliableTeam = [];
  let myId = auth.user.id;

  myTeams.map((t) => {
    console.log('t', t);
    t.managers.map((mgr) => {
      console.log('mgr == myId', mgr == myId);
      mgr == myId ? appliableTeam.push(t) : null;
    });
  });
  return appliableTeam;
}
