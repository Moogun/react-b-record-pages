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
  Divider,
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

export function FormLeagueInfo({ league, handleInputChange, handleSubmit }) {
  const { tokens } = useTheme();
  return (
    <View>
      <TextField
        size="small"
        label="리그 명"
        placeholder="000_league"
        name="title"
        onChange={handleInputChange}
        // value={league.title}
        marginBottom={tokens.space.small}
      />
      <TextField
        size="small"
        label="리그 추가 설명"
        placeholder="000_league"
        name="subtitle"
        onChange={handleInputChange}
        // value={league.title}
        marginBottom={tokens.space.small}
      />
      <TextField
        size="small"
        label="참가조건"
        isMultiline
        placeholder="참가조건이 여럿인 경우 ,(콤마) 로 구분하여 입력"
        name="requirements"
        onChange={handleInputChange}
        // value={league.title}
        marginBottom={tokens.space.small}
      />
      <Divider
        size="small"
        marginTop={tokens.space.large}
        marginBottom={tokens.space.large}
      />
      <TextField
        size="small"
        label="경기장소"
        placeholder="00 운동장, 00 코트"
        name="subtitle"
        onChange={handleInputChange}
        // value={league.title}
        marginBottom={tokens.space.small}
      />
      리그기간
      <TextField
        size="small"
        label="시작일"
        placeholder="July 1 2022"
        name="leagueToStart"
        onChange={handleInputChange}
        // value={league.dateToStart}
        marginBottom={tokens.space.small}
      />
      <TextField
        size="small"
        label="종료일"
        placeholder="July 1 2022"
        name="leagueToEnd"
        onChange={handleInputChange}
        // value={league.dateToEnd}
        marginBottom={tokens.space.small}
      />
      신청기간
      <TextField
        size="small"
        label="신청시작일"
        placeholder="July 1 2022"
        name="appToStart"
        onChange={handleInputChange}
        // value={league.dateToStart}
        marginBottom={tokens.space.small}
      />
      <TextField
        size="small"
        label="신청종료일"
        placeholder="July 1 2022"
        name="appToEnd"
        onChange={handleInputChange}
        // value={league.dateToEnd}
        marginBottom={tokens.space.small}
      />
      <Flex justifyContent="flex-end" marginTop={tokens.space.small}>
        <Button> Next </Button>
      </Flex>
    </View>
  );
}
