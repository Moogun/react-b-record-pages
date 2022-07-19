import React from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  Navigate,
  Link, Outlet, 
} from 'react-router-dom';
import { useTheme, Grid, Card, Button } from '@aws-amplify/ui-react';

import { PageHeader } from '../../pageHeader.js';

export default function LeagueEdit({}) {
  let location = useLocation();
  let leagueToEdit = location.state;
  console.log('[leagueToEdit]', leagueToEdit);

  const {tokens} = useTheme()

  return <div>
    <PageHeader title={"리그명 "} />
    <Grid
        columnGap="0.5rem"
        templateColumns="repeat(8, 1fr)"
        backgroundColor={tokens.colors.red[10]}
      >
        <Card column="1/3" 
        // backgroundColor={tokens.colors.blue[10]}
        >
          <nav>
            <Link to="info" state={leagueToEdit} style={{fontSize: "13px"}}>기본정보</Link>
            <br />
            <Link to="participants"  state={leagueToEdit} style={{fontSize: "13px"}}>참가팀</Link>
            <br />
            <Link to="schedules" state={leagueToEdit} style={{fontSize: "13px"}}>경기일정</Link>
            <br />
            <Link to="results" state={leagueToEdit} style={{fontSize: "13px"}}>경기기록</Link>
          </nav>
        </Card>
        <Card column="3/-1" 
        // backgroundColor={tokens.colors.green[10]}
        >
          <Outlet />
        </Card>
      </Grid>

    </div>;
}
