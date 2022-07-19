import React, { useContext } from 'react';
import './style.css';
import { Link, Outlet } from 'react-router-dom';

import { AuthContext } from './authProvider.js';
import AuthStatus from './authStatus.js';

// import { Header, SubHeader } from './appHeader.js';
// import { Main } from './appMain.js';
import { AiOutlineUser } from 'react-icons/ai';
import { Footer } from './footer.js';

import Leagues from './pages/league/leagues.js';
import {
  Grid,
  View,
  useTheme,
  Flex,
  Divider,
  Heading,
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

  return (
    <div>
      {/* <AuthStatus AuthContext={AuthContext} /> */}
      {/*
    
        <Footer /> */}

      <Base
        children={<Header auth={auth} />}
        bgC={tokens.colors.brand.primary[20]}
      />
      <Base
        children={<SubHeader auth={auth} />}
        bgC={}
      />

      {location && location.pathname == '/' 
        ? <Base children={ <Main />} bgC={} minH={"80vh"}/> 
        : <Base children={ <Outlet />} bgC={} minH={"80vh"}/> }

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
      <Grid templateColumns="1fr 1fr 1fr">
        <div></div>
        <div>
          <View variation="outlined" style={{ minWidth: '600px', minHeight: minH }}>{children}</View>
        </div>
        <div></div>
      </Grid>
    </View>
  );
}

function Header({ auth }) {
  const { tokens } = useTheme();

  return (
    <View >
      <Grid>
        <Card backgroundColor={tokens.colors.brand.primary[20]} variation="outlined">
          <Link to="/">Home</Link>

          <Link to="/account">
            <AiOutlineUser /> {auth.user ? auth.user.username : 'Login'}
          </Link>
          <Link to="create/home">리그/팀 만들기</Link>
        </Card>
      </Grid>
    </View>
  );
}

function SubHeader({ auth }) {
  const { tokens } = useTheme();
  return (
    <Card>
      {auth.user ? (
        <Link to="/leaguesmine" className="link-local-styles-subheader">
          나의 리그
        </Link>
      ) : null}
      <Link to="/leagues" className="link-local-styles-subheader">
        리그
      </Link>
      <Link to="/teams" className="link-local-styles-subheader">
        팀
      </Link>
    </Card>
  );
}

export function Main({ auth}) {
  const { tokens } = useTheme();
  return <View style={{minHeight: '80vh', border: "solid .1rem lightGray"}}>
    
    main 
  
  </View>;
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
