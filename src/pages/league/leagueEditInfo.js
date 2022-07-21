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
  Flex,
  Card,
  TextField,
  Button,
  Text,
  View,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@aws-amplify/ui-react';

import { FormLeagueInfo } from '../../forms/formLeagueInfo.js';

import Calendar from 'react-calendar';

export default function LeagueEditInfo({}) {
  let params = useParams();
  // console.log('leagueToEditInfo params', params); return one of the following, undefined or null
  let location = useLocation();
  let leagueToEdit = location.state; // return null
  console.log('leagueToEditInfo leagueToEdit', leagueToEdit);

  const handleNewGame = () => {
    console.log('[lea edit info] - handleNewGame ');
  };

  const { tokens } = useTheme();
  return (
    <div>
      <Grid
        columnGap="0.5rem"
        templateColumns="repeat(8, 1fr)"
        // backgroundColor={tokens.colors.red[10]}
      >
        {getCurrentSubMenu(location.pathname, leagueToEdit, handleNewGame)}
      </Grid>
    </div>
  );
}

function getCurrentSubMenu(path, leagueToEdit, handleNewGame) {
  if (path.includes('info')) {
    return <Info column="1/-1" leagueToEdit={leagueToEdit} />;
  } else if (path.includes('participants')) {
    return <Participants leagueToEdit={leagueToEdit} />;
  } else if (path.includes('schedules')) {
    return (
      <Schedules
        column="1/-1"
        leagueToEdit={leagueToEdit}
        handleNewGame={handleNewGame}
      />
    );
  } else if (path.includes('results')) {
    return <Results column="1/-1" leagueToEdit={leagueToEdit} />;
  }
  return <div> ''--</div>;
}

function Info({ column, leagueToEdit }) {
  return (
    <View column={column}>
      <FormLeagueInfo />
    </View>
  );
}

function Participants({ column, leagueToEdit }) {
  let parti = leagueToEdit.teamsParticipating;
  return (
    <View column={column}>
      <Text as="span"> 참가팀 </Text>

      <Table highlightOnHover={false} size="small" variation="bordered">
        <TableHead>
          <TableRow>
            {/* style={{fontSize: "12px"}} not working */}
            <TableCell as="th">#</TableCell>
            <TableCell as="th">팀</TableCell>
            <TableCell as="th">신청일</TableCell>
            <TableCell as="th">조건충족</TableCell>
            <TableCell as="th">참가확정</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {parti.map((p) => {
            return (
              <TableRow>
                <TableCell> {p} </TableCell>
                <TableCell> {p} </TableCell>
                <TableCell> {p} </TableCell>
                <TableCell> {p} </TableCell>
                <TableCell> {p} </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </View>
  );
}

function Schedules({ column, leagueToEdit, handleNewGame }) {
  const [value, onChange] = useState(new Date());

  let ga = leagueToEdit.games;

  return (
    <View column={column}>
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
            <TableCell as="th">경기 상태</TableCell>
            <TableCell as="th">승/패</TableCell>
            <TableCell as="th">점수</TableCell>
            <TableCell as="th">영상</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ga.map((g) => {
            return (
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>{g.date}</TableCell>
                <TableCell>{g.time}</TableCell>
                <TableCell>
                  {g.teams[0].name} - {g.teams[1].name}{' '}
                </TableCell>
                <TableCell>{g.venue}</TableCell>
                <TableCell>{g.gameStatus}</TableCell>
                <TableCell>{g.gameStatus}</TableCell>
                <TableCell>{g.gameStatus}</TableCell>
                
              </TableRow>
            );
          })}
          <TableRow>
            {' '}
            <TableCell colspan="6">
              <Flex justifyContent="center">
                <Button onClick={() => handleNewGame()}>new game</Button>{' '}
              </Flex>
            </TableCell>{' '}
          </TableRow>
        </TableBody>
      </Table>
    </View>
  );
}

function Results({ column, leagueToEdit }) {
  return;
  <View column={column}></View>;
}

{
  /* <Text> auto generate schedules </Text>
<ul>
  <li># of games </li>
  <li>대회날짜 </li>
  <li>하루 경기 수</li>
  <li>경기 시작시간</li>
  <li>경기 종료시간</li>
  <li>경기 소요시간</li>
  <li>경기 간격</li>
</ul> */
}
