import { getTeams } from './team_data.js';

let t = getTeams();

let games = [
  {
    id: 'g01',
    leagueId: 'lg_1',
    date: 'Sep 1, 2022',
    time: '10:00',
    gameStatus: 'not scheduled', // "scheduled"
    teams: [t[0], t[1]],
    win: t[0],
    score: '',
    venue: 'not decided',
    actionLog: [],
  },
  {
    id: 'g02',
    leagueId: 'lg_1',
    date: 'Sep 1, 2022',
    time: '10:00',
    gameStatus: 'not scheduled', // "scheduled"
    teams: [t[2], t[3]],
    win: t[2],
    score: '',
    venue: 'not decided',
    actionLog: [],
  },
  {
    id: 'g03',
    leagueId: 'lg_1',
    date: 'Sep 1, 2022',
    time: '10:00',
    gameStatus: 'not scheduled',
    teams: [t[2], t[3]],
    win: t[2],
    score: '',
    venue: 'not decided',
    actionLog: [],
  },
  {
    id: 'g04',
    leagueId: 'lg_1',
    date: 'Sep 1, 2022',
    time: '10:00',
    gameStatus: 'not scheduled',
    teams: [t[2], t[3]],
    win: t[2],
    score: '',
    venue: 'not decided',
    actionLog: [],
  },
  {
    id: 'g05',
    leagueId: 'lg_1',
    date: 'Sep 1, 2022',
    time: '10:00',
    gameStatus: 'not scheduled',
    teams: [t[2], t[3]],
    win: t[2],
    score: 'not decided',
    actionLog: [],
  },
  {
    id: 'g06',
    leagueId: 'lg_1',
    date: 'Sep 1, 2022',
    time: '10:00',
    gameStatus: 'not scheduled',
    teams: [t[2], t[3]],
    win: t[2],
    score: '',
    venue: 'not decided',
    actionLog: [],
  },
  {
    id: 'g07',
    leagueId: 'lg_2',
    date: 'August 1, 2022',
    time: '10:00',
    gameStatus: 'ended',
    teams: [t[2], t[3]],
    win: t[2],
    score: '30: 29',
    venue: '',
    actionLog: [],
  },
  {
    id: 'g08',
    leagueId: 'lg_2',
    date: 'August 1, 2022',
    time: '10:00',
    gameStatus: 'ended',
    teams: [t[2], t[3]],
    win: t[2],
    score: '30: 29',
    venue: '',
    actionLog: [],
  },
  {
    id: 'g09',
    leagueId: 'lg_2',
    date: 'August 1, 2022',
    time: '10:00',
    gameStatus: 'ended',
    teams: [t[2], t[3]],
    win: t[2],
    score: '30: 29',
    venue: 'gym b',
    actionLog: [],
  },
  {
    id: 'g10',
    leagueId: 'lg_2',
    date: 'August 1, 2022',
    time: '10:00',
    gameStatus: 'scheduled',
    teams: [t[2], t[3]],
    win: '',
    score: '',
    venue: 'gym b',
    actionLog: [],
  },
  {
    id: 'g11',
    leagueId: 'lg_2',
    date: 'August 1, 2022',
    time: '10:00',
    gameStatus: 'scheduled',
    teams: [t[2], t[3]],
    win: '',
    score: '',
    venue: 'gym b',
    actionLog: [],
  },
  {
    id: 'g12',
    leagueId: 'lg_2',
    date: 'August 1, 2022',
    time: '10:00',
    gameStatus: 'scheduled',
    teams: [t[2], t[3]],
    win: '',
    score: '',
    venue: 'gym b',
    actionLog: [],
  },
  {
    id: 'g13',
    leagueId: 'lg_3',
    date: 'July 10, 2021',
    time: '10:00',
    gameStatus: 'ended',
    teams: [t[2], t[3]],
    win: t[2],
    score: '40: 39',
    venue: 'gym a',
    actionLog: [],
  },
  {
    id: 'g14',
    leagueId: 'lg_3',
    date: 'July 10, 2021',
    time: '11:00',
    gameStatus: 'ended',
    teams: [t[2], t[3]],
    win: t[2],
    score: '30: 29',
    venue: 'gym a',
    actionLog: [],
  },
];


export function getGames() {
  return games;
}
