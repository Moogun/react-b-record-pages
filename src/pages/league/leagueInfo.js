import React, { useContext, useState } from 'react';
import { useLocation, } from 'react-router-dom';
import {
  useTheme,
  Card, 

} from '@aws-amplify/ui-react';


import {
  PageHeader,
  DescriptionBadge,
  DescriptionText,
} from '../../pageHeader.js';

export default function LeagueInfo({  }) {
  const { tokens } = useTheme();
  let location = useLocation()
  console.log('[league info location', location)
  let league = location.state

  return (
    <Card
      margin={tokens.space.small}
    >
      <DescriptionText
        text1={'참가 팀 수'}
        text2={league.numOfteamsParticipating}
      />

      <DescriptionText
        text1={'신청 가능 팀 수'}
        text2={
          league.numOfteamsParticipating - league.teamsParticipating.length
        }
      />

      <DescriptionText
        text1={'대회기간'}
        text2={league.leagueToStart}
        text3={league.leagueToEnd}
      />
      <DescriptionText
        text1={'신청기간'}
        text2={league.appToStart}
        text3={league.appToEnd}
      />
      <DescriptionText text1={'장소'} text2={'서울 장충체육관'} />
      <DescriptionText text1={'주최'} text2={'대한농구협의회'} />
    </Card>
  );
}