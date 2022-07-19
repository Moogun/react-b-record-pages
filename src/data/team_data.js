import { getUsers } from './user_data.js';

let u = getUsers();

let teams = [
  {
    id: 't01',
    name: '북산',
    createdBy: u[0],
    managers: [u[0], u[1]],
    players: [u[0], u[1], u[2]],
    leagues:[],
    games: [1, 2, 3],
  },
  {
    id: 't02',
    name: '해남',
    createdBy: u[0],
    managers: [u[3]],
    players: [u[3], u[4], u[5]],
    leagues:[],
    games: [1, 2, 3],
  },
  {
    id: 't03',
    name: '상양',
    createdBy: u[0],
    managers: [u[6]],
    players: [u[6], u[7], u[8]],
    leagues:[],
    games: [1, 2, 3],
  },
  {
    id: 't04',
    name: '능남',
    createdBy: u[0],
    managers: [u[10]],
    players: [u[9], u[10], u[11]],
    leagues:[],
    games: [1, 2, 3],
  },
  {
    id: 't05',
    name: '산왕공고',
    createdBy: u[0],
    managers: [u[11]],
    players: [u[9], u[10], u[11]],
    leagues:[],
    games: [1, 2, 3],
  },
];

export function getTeams() {
  return teams;
}

export function getTeam(number) {
  // console.log('getTeam', number)
  return teams.find((t) => t.id == number);
}
