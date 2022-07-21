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
          {league.standing &&
            league.standing.map((s) => (
              <TableRow>
                <TableCell>{s.team}</TableCell>
                <TableCell>{s.games} </TableCell>
                <TableCell>
                {Math.round(s.won / s.games *100) }%
                </TableCell>
                <TableCell>{s.won}</TableCell>
                <TableCell>{s.lost}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
}
