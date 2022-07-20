import React, { useContext } from 'react';
import { AuthContext } from '../../authProvider.js';
import { useSelector } from 'react-redux';
import { getLeague } from './leagueSlice';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import {
  Collection,
  Card,
  Text,
  Badge,
  Button,
  Grid,
  View,
  Divider,
  useTheme,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@aws-amplify/ui-react';

import {
  PageHeader,
  DescriptionBadge,
  DescriptionText,
} from '../../pageHeader.js';

export default function team() {
  let auth = useContext(AuthContext);

  let navigate = useNavigate();
  const location = useLocation();
  let params = useParams();

  let league = useSelector((state) => {
    return state.leagues.selected;
  });
  let myLeague = league && league.createdBy.id == auth.user.id;

  // let myLeague = checkMyLeague(auth.user.id, auth.user.myLeagues, league)
  // let admin = league.manager.find((i => i == auth.user.id))

  // console.log('myLeague', myLeague);
  console.log('pathname', location.pathname);
  console.log('search', location.search);
  console.log('[league] league', league);

  // console.log('params.teamId', params.teamId);
  // console.log('team.manager', team.manager);
  // console.log('team.manager', team.manager[0] === auth.user.id);

  const handleEdit = () => {
    console.log(params);
    navigate(`${location.pathname}/edit`, { replace: true, state: league });
  };

  const handleApp = () => {
    console.log(params);
    navigate(`${location.pathname}/app`, { replace: false, state: league });
  };

  const handleGame = (gid) => {
    console.log(gid);
    // navigate(`${location.pathname}/game/${gid}`, { replace: false, state: league });
    navigate(`../game/${gid}`)
  };


  const { tokens } = useTheme();
  return (
    <View>
      {/* <Card key={league.id}> */}
      {/* <PageHeader title={league.title} /> */}

      <Card margin={tokens.space.small} >
      
      <PageHeader title={league.title} />

      <Grid templateColumns="1fr">
        {/* <View column="1" backgroundColor={tokens.colors.red[10]}>
          {' '}
          a{' '}
        </View>
        <View column="2" backgroundColor={tokens.colors.blue[10]}>
          {' '}
          a{' '}
        </View> */}
        {myLeague ? <Button onClick={handleEdit}> Edit 🚀</Button> : null}
      </Grid>

      {/* 
      this has no margin, 
      <Heading level={5}> 리그 정보 </Heading> 
      */}

      <h4> 대회 정보 </h4>
      <Info league={league} />

      <h4> 참가 신청</h4>

      <Card
        variation="elevated"
        backgroundColor={tokens.colors.background.secondary}
      >
        <DescriptionText text1={'참가 조건 1'} />
        <DescriptionText text1={'참가 조건 2'} />

        <br />
        <Button
          size="small"
          isFullWidth
          variation="primary"
          onClick={handleApp}
        >
          {' '}
          신청{' '}
        </Button>

        {/* <Button isFullWidth onClick={handleEdit}> Edit </Button> */}
        {/* {league.status &&
          league.teamsParticipating.map((t) => <span> {t} </span>)} */}
      </Card>

      <h4> 리그 순위</h4>
      <Card
        variation="elevated"
        backgroundColor={tokens.colors.background.secondary}
      >
        {league.status == 'app' ? (
          <DescriptionText text1={'리그 시작 전'} />
        ) : (
          <Standing league={league} />
        )}
      </Card>

      <h4> 경기 일정 </h4>
      <GameSchedule league={league} handleGame={handleGame}/>
      {/* </Card> */}
      </Card>
    </View>
  );
}

function Info({ league }) {
  const { tokens } = useTheme();
  return (
    <Card
      variation="elevated"
      backgroundColor={tokens.colors.background.secondary}
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

function GameSchedule({ league, handleGame }) {

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
        {league.status &&
          league.games.map((g) => (
            <TableRow key={g.id} onClick={() => handleGame(g.id)}>
              <TableCell>{g.date}</TableCell>
              <TableCell>{g.time} </TableCell>
              <TableCell>
                {' '}
                {g.teams[0].name} - {g.teams[1].name}
              </TableCell>
              <TableCell>{g.venue}</TableCell>
              <TableCell>{g.status}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}


{
  /* {admin ? <button> new league </button> : ""} */
}


// function checkMyLeague(uid, myLeagues, selectedLeague) {

//   let leagueIds = [];
//   let status = false;

//   console.log('[checkMyLeague]', myLeagues)
//   console.log('selectedLeague', selectedLeague)

//   myLeagues.map(l => {
//     console.log(' uid', uid)
//     console.log(' l.createdBy', l.createdBy)
//     console.log('uid == l.createdBy', uid == l.createdBy.id)
//     if (uid == l.createdBy.id) {
//       leagueIds.push(l.id)
//     }
//   })
//   status = leagueIds.includes(selectedLeague.id);
//   return status
// }
