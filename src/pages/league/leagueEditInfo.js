import React, { useState } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  Navigate,
  Link,
  Outlet,
} from 'react-router-dom';
import {
  useTheme,
  Grid,
  Card,
  Button,
  Text,
  View,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@aws-amplify/ui-react';

import Calendar from 'react-calendar';

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
        // backgroundColor={tokens.colors.red[10]}
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

function Info({ column, leagueToEdit }) {
  return <View column={column}> info </View>;
}

function Participants({ column, leagueToEdit }) {
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

function Schedules({ column, leagueToEdit }) {
  const [value, onChange] = useState(new Date());

  let ga = leagueToEdit.games;

  return (
    <View column={column}>
      <Text> schedules </Text>
      
      <Text> auto generate schedules </Text>
      <ul>
        <li># of games </li>
        <li>대회날짜 </li>
        <li>하루 경기 수</li>
        <li>경기 시작시간</li>
        <li>경기 종료시간</li>
        <li>경기 소요시간</li>
        <li>경기 간격</li>
      </ul>

      <Text> schedules </Text>
      <Table highlightOnHover={false} size="small" variation="bordered">
        <TableHead>
          <TableRow>
            {/* style={{fontSize: "12px"}} not working */}
            <TableCell as="th">#</TableCell>
            <TableCell as="th">Date</TableCell>
            <TableCell as="th">Time</TableCell>
            <TableCell as="th">Match</TableCell>
            <TableCell as="th">장소</TableCell>
            <TableCell as="th">결과</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ga.map((g) => {
            return (
              <TableRow >
                <TableCell >#</TableCell>
                <TableCell>{g.date}</TableCell>
                <TableCell>{g.time}</TableCell>
                <TableCell>
                  {g.teams[0].name} - {g.teams[1].name}{' '}
                </TableCell>
                <TableCell>{g.venue}</TableCell>
                <TableCell>{g.gameStatus}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </View>
  );
}

function Results({ column, leagueToEdit }) {
  return <View column={column}> results </View>;
}
