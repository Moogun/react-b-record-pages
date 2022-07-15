import React, { useContext, useState } from 'react';
import { AuthContext } from '../authProvider.js';
import { useDispatch, useParams } from 'react-redux';
import { appLeague } from './leagueSlice';

import { PageHeader } from '../pageHeader.js';
import {
  View,
  Heading,
  useTheme,
  Card,
  Radio,
  RadioGroupField,
  Button,
} from '@aws-amplify/ui-react';

export default function TeamJoin({}) {
  let auth = useContext(AuthContext);
  // let params = useParams();
  // console.log('[team join]', params)
  // let myTeams = auth.user.myTeams;
  // let tt = getManagingTeam(auth, myTeams);
  // const [selected, setTeam] = useState('');

  // let dispatch = useDispatch()

  // const handleChoose = () => {
  //   console.log('handleChoose', selected);
  //   let t = getTeam(myTeams, selected)
  //   dispatch(appLeague(t))
  // };

  const { tokens } = useTheme();
  return (
    <div>
      <PageHeader title={'가입하기'} />
      
      
      {/* <Button isDisabled={ selected.length > 2 ? false : true} onClick={handleChoose}> 신청 완료 </Button> */}
    </div>
  );
}
