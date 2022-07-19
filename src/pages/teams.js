import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTeam } from './teamSlice';

import {
  NavLink,
  Outlet,
  useSearchParams,
  useNavigate,
} from 'react-router-dom';
import Team from './team.js';

import {
  TextField,
  SelectField,
  TextAreaField,
  Button,
  Flex,
  View,
  Grid,
  Divider,
  Heading,
  Text,
  useTheme,
} from '@aws-amplify/ui-react';

import { PageHeader } from '../pageHeader.js';

export default function teams() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  let teams = useSelector((state) => {
    // console.log('[teams]', state)
    return state.teams.list;
  });

  let [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (teamId) => {
    dispatch(getTeam(teamId));
    navigate('/teams/' + teamId);
  };

  // {
  //   teams.map((t, index) => (
  //     <div onClick={() => handleClick(t.id)}>
  //       {' '}
  //       {t.name} {index}{' '}
  //     </div>
  //   ));
  // }
  const { tokens } = useTheme();

  return (
    <main>
      <View backgroundColor={tokens.colors.brand.primary[20]}>
        <PageHeader title={'팀'} />
        <nav
          style={{
            borderRight: 'solid 1px',
            padding: '1rem',
          }}
        >
          <input
            value={searchParams.get('filter') || ''}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />

          {teams
            .filter((t) => {
              let filter = searchParams.get('filter');
              if (!filter) return true;
              let name = t.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((t) => (
              <NavLink
                style={({ isActive }) => {
                  return {
                    display: 'block',
                    margin: '1rem 0',
                    color: isActive ? 'red' : '',
                  };
                }}
                // to={`/teams/${t.id}`}
                to={`${t.id}`}
                key={t.name}
                onClick={() => handleClick(t.id)}
              >
                {t.name}
              </NavLink>
            ))}
        </nav>

        <Outlet />
      </View>
    </main>
  );
}
