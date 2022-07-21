import React, { useContext, useState } from 'react';
import './style.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import { AuthContext } from './authProvider.js';
import AuthStatus from './authStatus.js';

import { AiOutlineUser } from 'react-icons/ai';

import Leagues from './pages/league/leagues.js';
import {
  Grid,
  Heading,
  View,
  useTheme,
  Flex,
  Divider,
  Text,
  Card,
  Icon,
  Button,
} from '@aws-amplify/ui-react';

const IconSave = () => {
  return (
    <Icon
      ariaLabel=""
      pathData="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3ZM19 19H5V5H16.17L19 7.83V19ZM12 12C10.34 12 9 13.34 9 15C9 16.66 10.34 18 12 18C13.66 18 15 16.66 15 15C15 13.34 13.66 12 12 12ZM6 6H15V10H6V6Z"
    />
  );
};

export default function Layout() {
  const auth = useContext(AuthContext);
  console.log('[app]', auth);
  const { tokens } = useTheme();

  const [menu, setMenu] = useState('home')

  let navigate = useNavigate();
  const handleNav = (to) => {
    console.log('to', to);
    switch (to) {
      case 'home':
        navigate('/');
        setMenu('호리');
        break;

      case 'create':
        navigate('/create/home');
        setMenu('리그/팀 만들기');
        break;
      case 'leaguesmine':
        navigate('/leaguesmine');
        setMenu('내 리그');
        break;
  
      case 'teamsmine':
        navigate('/teams');
        setMenu('내 팀');
        break;
      case 'account':
        navigate('/account');
        setMenu('계정');
        break;
      default:
        break;
    }
  };  

  return (
    <div>
      {/* <AuthStatus AuthContext={AuthContext} /> */}
      <Base
        children={<Header auth={auth} handleNav={handleNav} />}
        // bgC={tokens.colors.brand.primary[100]}
      />
      <Base
        children={<SubHeader auth={auth} menu={menu}/>}
        bgC={}
      />

      {location && location.pathname == '/' 
        ? <Base children={ <Main />} bgC={tokens.colors.background.tertiary} minH={"80vh"}/> 
        : <Base children={ <Outlet />} bgC={tokens.colors.background.tertiary} minH={"80vh"}/> }

      <Base
        children={<Footer auth={auth} />}
        bgC={tokens.colors.background.tertiary}
      />
  
    </div>
  );
}

function Base({ children, bgC, minH }) {
  return (
    <View backgroundColor={bgC}>
      <Grid templateColumns="1fr 1fr 1fr" style={{borderBottom: 'solid .1rem lightGray'}}>
        <div></div>
        <div>
          <View variation="outlined" style={{ minWidth: '600px', minHeight: minH }}>{children}</View>
        </div>
        <div></div>
      </Grid>
    </View>
  );
}
function Header({ auth, handleNav }) {
  const { tokens } = useTheme();

  return (
    <View>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
        alignContent="flex-start"
        wrap="nowrap"
        gap="0rem"
      >
        <Flex>
          <Button
            className="navbar-button"
            size="small"
            variation="menu"
            margin={tokens.space.xs}
            onClick={() => handleNav('home')}
          >
            호리
          </Button>
        </Flex>

        <Flex justifyContent="flex-end" gap="0rem">
          <Button
            className="navbar-button"
            size="small"
            variation="menu"
            margin={tokens.space.xs}
          >
            검색
          </Button>
          <Button
            className="navbar-button"
            size="small"
            variation="menu"
            margin={tokens.space.xs}
            onClick={() => handleNav('create')}
          >
            리그/팀 만들기
          </Button>

          <Button
            className="navbar-button"
            size="small"
            variation="menu"
            margin={tokens.space.xs}
            onClick={() => handleNav('leaguesmine')}
          >
            내 리그
          </Button>

          <Button
            className="navbar-button"
            size="small"
            variation="menu"
            margin={tokens.space.xs}
            onClick={() => handleNav('teamsmine')}
          >
            내 팀
          </Button>

          <Button
            className="navbar-button"
            size="small"
            variation="menu"
            margin={tokens.space.xs}
            onClick={() => handleNav('account')}
          >
            계정
          </Button>
        </Flex>
      </Flex>
    </View>
  );
}

function SubHeader({ auth, menu }) {
  const { tokens } = useTheme();
  return (
    <Card padding={tokens.space.small}>
      <Heading level={5}> {menu} </Heading>
      {/* {auth.user ? (
        <Link to="/leaguesmine" className="link-local-styles-subheader">
          나의 리그
        </Link>
      ) : null}
      <Link to="/leagues" className="link-local-styles-subheader">
        리그
      </Link>
      <Link to="/teams" className="link-local-styles-subheader">
        팀
      </Link> */}
    </Card>
  );
}

export function Main({ auth }) {
  const { tokens } = useTheme();
  return (
    <View
      style={{
        minHeight: '80vh',
        // border: "solid .1rem lightGray"
      }}
    >
      <Grid templateColumns="1fr 1fr" templateRows="1fr 1fr 1fr">
        <Card
          // variation="elevated"
          row="1/4"
          margin={tokens.space.small}
          backgroundColor={tokens.colors.background.primary}
        >
          Activities 890,344 Sales{' '}
        </Card>

        <Card
          // variation="elevated"
          row="1/3"
          margin={tokens.space.small}
          backgroundColor={tokens.colors.background.primary}
        >
          Activities 890,344 Sales{' '}
        </Card>

        <Card
          // variation="elevated"
          margin={tokens.space.small}
          backgroundColor={tokens.colors.background.primary}
        >
          Activities 890,344 Sales{' '}
        </Card>
      </Grid>
    </View>
  );
}


function Footer() {
  const { tokens } = useTheme();
  return (
    <View
      backgroundColor={tokens.colors.background.quaternary}
      padding={tokens.space.large}
      // marginTop={tokens.space.large}
    >
      <Text color={tokens.colors.neutral[40]}>Fineplay </Text>
      <Text fontSize="0.8rem" color={tokens.colors.neutral[40]}>
        Copyright Fineplay Corp. All rights reserved.{' '}
      </Text>
    </View>
  );
}
