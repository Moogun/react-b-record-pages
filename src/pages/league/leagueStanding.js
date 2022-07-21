import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
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

export default function LeagueStanding({}) {
  const { tokens } = useTheme();
  let location = useLocation();
  console.log('[league info location', location);
  let league = location.state;

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
    <Card margin={tokens.space.small}>
      <Table highlightOnHover={true} size="small" variation="striped">
        <TableHead>
          <TableRow>
            <TableCell as="th">팀 </TableCell>
            <TableCell as="th">경기 수</TableCell>
            <TableCell as="th">승률</TableCell>
            <TableCell as="th">승</TableCell>
            <TableCell as="th">패</TableCell>
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
    </Card>
  );
}
