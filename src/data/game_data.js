import { getTeams } from './team_data.js';

let t = getTeams();

let games = [
  {
    id: 'g01',
    leagueId: '',
    dayAndTime: '10:00, July 10, 2021',
    gameStatus: 'completed', // "scheduled"
    teams: [t[0], t[1]],
    win: t[0],
    score: '22: 34',
    actionLog: [],
  },
  {
    id: 'g02',
    leagueId: '',
    dayAndTime: '10:00, July 10, 2021',
    gameStatus: 'completed', // "scheduled"
    teams: [t[2], t[3]],
    win: t[2],
    score: '32: 34',
    actionLog: [],
  },
  {
    id: 'g03',
    leagueId: '',
    dayAndTime: 'August 1, 2022',
    gameStatus: 'yet / game on / result',
    teams: [t[2], t[3]],
    win: t[2],
    score: '30: 29',
    actionLog: [],
  },
  {
    id: 'g04',
    leagueId: '',
    dayAndTime: 'August 1, 2022',
    gameStatus: 'yet / game on / result',
    teams: [t[2], t[3]],
    win: t[2],
    score: '30: 29',
    actionLog: [],
  },
  {
    id: 'g05',
    leagueId: '',
    dayAndTime: 'August 1, 2022',
    gameStatus: 'yet / game on / result',
    teams: [t[2], t[3]],
    win: t[2],
    score: '30: 29',
    actionLog: [],
  },
  {
    id: 'g06',
    leagueId: '',
    dayAndTime: 'August 1, 2022',
    gameStatus: 'yet / game on / result',
    teams: [t[2], t[3]],
    win: t[2],
    score: '30: 29',
    actionLog: [],
  },
  {
    id: 'g07',
    leagueId: '',
    dayAndTime: 'August 1, 2022',
    gameStatus: 'yet / game on / result',
    teams: [t[2], t[3]],
    win: t[2],
    score: '30: 29',
    actionLog: [],
  },
  {
    id: 'g08',
    leagueId: '',
    dayAndTime: 'August 1, 2022',
    gameStatus: 'yet / game on / result',
    teams: [t[2], t[3]],
    win: t[2],
    score: '30: 29',
    actionLog: [],
  },
  {
    id: 'g09',
    leagueId: '',
    dayAndTime: 'August 1, 2022',
    gameStatus: 'yet / game on / result',
    teams: [t[2], t[3]],
    win: t[2],
    score: '30: 29',
    actionLog: [],
  },
  {
    id: 'g10',
    leagueId: '',
    dayAndTime: 'August 1, 2022',
    gameStatus: 'yet / game on / result',
    teams: [t[2], t[3]],
    win: t[2],
    score: '30: 29',
    actionLog: [],
  },
  {
    id: 'g11',
    leagueId: '',
    dayAndTime: 'August 1, 2022',
    gameStatus: 'yet / game on / result',
    teams: [t[2], t[3]],
    win: t[2],
    score: '30: 29',
    actionLog: [],
  },
  {
    id: 'g12',
    leagueId: '',
    dayAndTime: 'August 1, 2022',
    gameStatus: 'yet / game on / result',
    teams: [t[2], t[3]],
    win: t[2],
    score: '30: 29',
    actionLog: [],
  },
  {
    id: 'g13',
    leagueId: '',
    dayAndTime: 'August 1, 2022',
    gameStatus: 'yet / game on / result',
    teams: [t[2], t[3]],
    win: t[2],
    score: '30: 29',
    actionLog: [],
  },
];


export function getGames() {
  return games;
}