import React, { useContext, useState } from 'react';
import { AuthContext } from '../../authProvider.js';
import { useSelector } from 'react-redux';
import { getLeague } from './leagueSlice';
import { useParams, useNavigate, useLocation, Link, Outlet } from 'react-router-dom';

import {
  Collection,
  Card,
  Text,
  Badge,
  Button,
  ButtonGroup,
  Grid,
  Flex,
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
  const [subMenu, setSubMenu] = useState('')
  
  let param = useParams()
  let navigate = useNavigate();
  const location = useLocation();

  let league = useSelector((state) => {
    return state.leagues.selected;
  });

  const handleNav = (to) => {
    console.log('[league params]-', param.leagueId)
    console.log('to', to);
    switch (to) {
      case 'standing':
        navigate(`standing`, { state: league });
        setSubMenu('standing');
        break;
      case 'schedules':
        navigate(`schedules`, { state: league });        
        setSubMenu('내 schedules');
        break;
  
      case 'info':
        navigate(`info`, { state: league });
        setSubMenu('info');
        break;

      default:
        break;
    }
  };  

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
    navigate(`../game/${gid}`);
  };

  const { tokens } = useTheme();
  return (
    <View>
      {/* <Card key={league.id}> */}
      {/* <PageHeader title={league.title} /> */}

      <Grid>
        <Card margin={tokens.space.small}>
          <PageHeader title={league.title} />

          <Flex
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch"
            alignContent="flex-start"
            wrap="nowrap"
            gap="0rem"
          >
            <Button
              className="league-submenu-button"
              size="small"
              variation="menu"
              onClick={() => handleNav('standing')}
            >
              현황
            </Button>
            <Button
              size="small"
              variation="menu"
              className="league-submenu-button"
              onClick={() => handleNav('schedules')}
            >
              일정
            </Button>

            <Button
              className="league-submenu-button"
              size="small"
              variation="menu"
              onClick={() => handleNav('info')}
            >
              일반
            </Button>
          </Flex>

          <Grid marginTop={tokens.space.small}>
            {myLeague ? <Button onClick={handleEdit}> Edit 🚀</Button> : null}
          </Grid>
        </Card>

        <Outlet />
      </Grid>

    </View>
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
