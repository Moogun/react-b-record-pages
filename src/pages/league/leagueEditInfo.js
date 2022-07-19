import React from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  Navigate,
  Link,
  Outlet,
} from 'react-router-dom';
import { useTheme, Grid, Card, Button } from '@aws-amplify/ui-react';

export default function LeagueEditInfo({}) {
  let params = useParams();
  // console.log('leagueToEditInfo params', params); return one of the following, undefined or null  
  let location = useLocation();
    let leagueToEdit = location.state; // return null 
  // console.log('leagueToEditInfo leagueToEdit', leagueToEdit);

  const { tokens } = useTheme();

  return (
    <div>
      <Grid
        columnGap="0.5rem"
        templateColumns="repeat(8, 1fr)"
        backgroundColor={tokens.colors.red[10]}
      >
        {getCurrentSubMenu(location.pathname)}

      </Grid>
    </div>
  );
}

function getCurrentSubMenu(path) {
  if (path.includes('info')) {
    return <Info />;
  } else if (path.includes('participants')) {
    return  <Participants />;;
  } else if (path.includes('schedules')) {
    return  <Schedules />;
  } else if (path.includes('results')) {
    return  <Results />;;
  }
  return <div> ''--</div>;
}

function Info() {
return <div> info </div>
}

function Participants() {
  return <div> participants </div>
}

function Schedules() {
  return <div> schedules </div>
}

function Results() {
  return <div> results </div>
}