import React from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  Navigate,
  Link,
  Outlet,
} from 'react-router-dom';
import { useTheme, Grid, Card, Button, Text, View } from '@aws-amplify/ui-react';

export default function LeagueEditInfo({}) {
  let params = useParams();
  // console.log('leagueToEditInfo params', params); return one of the following, undefined or null
  let location = useLocation();
  let leagueToEdit = location.state; // return null
  console.log('leagueToEditInfo leagueToEdit', leagueToEdit);

  const { tokens } = useTheme();

  return (
    <div>
      <Grid
        columnGap="0.5rem"
        templateColumns="repeat(8, 1fr)"
        backgroundColor={tokens.colors.red[10]}
      >
        {getCurrentSubMenu(location.pathname, leagueToEdit)}
      </Grid>
    </div>
  );
}

function getCurrentSubMenu(path, leagueToEdit) {
  if (path.includes('info')) {
    return <Info column="1/-1" leagueToEdit={leagueToEdit} />;
  } else if (path.includes('participants')) {
    return <Participants leagueToEdit={leagueToEdit} />;
  } else if (path.includes('schedules')) {
    return <Schedules column="1/-1" leagueToEdit={leagueToEdit} />;
  } else if (path.includes('results')) {
    return <Results column="1/-1" leagueToEdit={leagueToEdit} />;
  }
  return <div> ''--</div>;
}

function Info({column, leagueToEdit }) {
  return <View column={column}> info </View>;
}

function Participants({column, leagueToEdit }) {
  let parti = leagueToEdit.teamsParticipating;
  return (
    <View column={column}>
      <Text> participants </Text>
      {parti.map((p) => {
        return <div> {p} </div>;
      })}
    </View>
  );
}

function Schedules({column,  leagueToEdit }) {
  let ga = leagueToEdit.games;
  console.log('[column]', column)
  return (
    <View column={column}>
      <Text> schedules </Text>
      {ga.map((g) => {
        return <div>
           {/* {g.date} - {g.time}  */}
           e industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pu
           </div>;
      })}
    </View>
  );
}

function Results({column, leagueToEdit }) {
  return  <View column={column}> results </View>;
}
