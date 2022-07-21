import React, { useContext, useState } from 'react';
import { useLocation, useNavigate, } from 'react-router-dom';
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

export default function LeagueSchedule({ }) {
  const { tokens } = useTheme();
  let location = useLocation();
  console.log('[league info location', location);
  let league = location.state;

  let navigate = useNavigate()
  const handleGame = (gid) => {
    console.log(gid);
    navigate(`../game/${gid}`);
  };

  return (
    <Card margin={tokens.space.small}>
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
    </Card>
  );
}
