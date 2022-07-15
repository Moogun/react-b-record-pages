import React, { useContext } from 'react';
import { AuthContext } from '../../authProvider.js';
import { useSelector } from 'react-redux';
import { getLeague } from './leagueSlice';
import {
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import {
  Collection,
  Card,
  Heading,
  Text,
  Badge,
  Button,
  Grid,
  View,
  useTheme,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@aws-amplify/ui-react';

import { PageHeader } from '../../pageHeader.js';

export default function team() {
  let auth = useContext(AuthContext);

  let navigate = useNavigate();
  const location = useLocation();
  let params = useParams();
  
  let league = useSelector((state) => {
    return state.leagues.selected;
  });

  console.log('hash', location.hash);
  console.log('pathname', location.pathname);
  console.log('search', location.search);
  console.log('[league] league', league);
  
  // console.log('params.teamId', params.teamId);
  // console.log('team.manager', team.manager);
  // console.log('team.manager', team.manager[0] === auth.user.id);
  // let admin = league.manager.find((i => i == auth.user.id))

  const handleEdit = () => {
    console.log(params);
    navigate(`${location.pathname}/edit`, { replace: true, state: league });
  };

  const handleApp = () => {
    console.log(params);
    navigate(`${location.pathname}/app`, { replace: false, state: league });
  };

  

  const { tokens } = useTheme();
  return (
    <main>
      {/* <Card key={league.id}> */}
      <PageHeader title={league.title} />
        {/* <Heading level={2} fontWeight={tokens.fontWeights.thin}>
          {league.title}{' '} */}
          {/* KB국민은행 Liiv M 3x3 KOREA TOUR 2022 3차 인제대회{' '} */}
          {/* <Badge size="small" variation="info">
            {league.status}
          </Badge>
        </Heading> */}
        {/* <Button onClick={handleEdit}> Edit </Button> */}

        <Info league={league} />

        <Card>
          <h4> 참가 신청</h4>

          <Text> 참가 조건 1 </Text>
          <Text> 참가 조건 2 </Text>
          <Text> 참가 조건 3 </Text>

          <br />
          <Button isFullWidth variation="primary" onClick={handleApp}>
            {' '}
            신청{' '}
          </Button>

          {/* <Button isFullWidth onClick={handleEdit}> Edit </Button> */}
          {/* {league.status &&
          league.teamsParticipating.map((t) => <span> {t} </span>)} */}
        </Card>

        <Card>
          <h4> 리그 순위</h4>
          {league.status == 'app' ? (
            <Text> 리그 시작 전 </Text>
          ) : (
            <Standing league={league} />
          )}
        </Card>

        <Card>
          <h4> 경기 일정 </h4>
          <GameSchedule league={league} />
        </Card>
      {/* </Card> */}
    </main>
  );
}

function Info({ league }) {
  const { tokens } = useTheme();
  return (
    <Card>
      <h4> 리그 정보 </h4>
      <Text> 참가 팀 {league.numOfteamsParticipating}</Text>
      <Text> 대회기간 : </Text>
      <Text> 신청기간 : </Text>
      <Text> 경기장소 : </Text>
      <Text>
        잔여 자리
        {league.numOfteamsParticipating - league.teamsParticipating.length}{' '}
      </Text>
      {/* <Button> Join </Button> */}
    </Card>
  );
}

function Standing({ league }) {
  // console.log('league.teams', league.teamsParticipating)
  // console.log('league.games', league.games)
  // let st = []

  // league.games.map(g => {
  //   g.teams.map(t => {
  //     console.log('t', t.name)
  //   })
  //   console.log(g.win.name)
  // })

  return (
    <table>
      <tr>
        <th>Team name</th>
        <th>Num of Games</th>
        <th>Points</th>
        <th>Won</th>
        <th>Lost</th>
      </tr>
      <tr>
        <td>Team 1 </td>
        <td>2</td>
        <td>6</td>
        <td>2</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Team 2 </td>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>2</td>
      </tr>
    </table>
  );
}

function GameSchedule({ league }) {
  //   {league.status &&
  //     league.games.map((g) => (
  //       <tr key={g.id}>
  //         <td>{g.date} </td>
  //         <td>{g.time} </td>

  //         <td> null</td>
  //         <td> {g.venue} </td>
  //       </tr>
  //     ))}

  return (
    <Table highlightOnHover={true} size="small" variation="striped">
      <TableHead>
        <TableRow>
          <TableCell as="th">날짜 </TableCell>
          <TableCell as="th">시간</TableCell>
          <TableCell as="th">팀</TableCell>
          <TableCell as="th">장소</TableCell>
          <TableCell as="th">결과</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>22년 07월 22일</TableCell>
          <TableCell>오전 10:00 </TableCell>
          <TableCell>KT수지 B vs 원주 YKK A</TableCell>
          <TableCell>00 체육관 A 코트</TableCell>
          <TableCell>경기 전</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>22년 07월 22일</TableCell>
          <TableCell>오전 10:00 </TableCell>
          <TableCell>KT수지 B vs 원주 YKK A</TableCell>
          <TableCell>00 체육관 A 코트</TableCell>
          <TableCell>경기 전</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>22년 07월 22일</TableCell>
          <TableCell>오전 10:00 </TableCell>
          <TableCell>KT수지 B vs 원주 YKK A</TableCell>
          <TableCell>00 체육관 A 코트</TableCell>
          <TableCell>경기 전</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

{
  /* <button onClick={handleNewGame}>new game</button> */
}
{
  /* <div> */
}

{
  /* {admin ? <button> new league </button> : ""} */
}
{
  /* </div> */
}

{
  /* 

      <div style={{ border: 'solid 1px' }}>
        Players
        <div>
          {team.players.map((p) => (
            <button> {p.name} </button>
          ))}
        </div>
      </div>

      <div style={{ border: 'solid 1px' }}>
        Games
        <div>
          {team.games.map((g) => (
            <button key={g}> {g} </button>
          ))}
        </div>
      </div> */
}
