import {getUsers, getUser} from './user_data.js'
import {getGames} from './game_data.js'
let games = getGames()

let leagues = [
  {
    id: 'lg_1',
    title: 'League 1',
    status: 'started', // receiving app, started, ongoing, finished   
    createdBy: getUser('001'),
    gamePerTeam: 1,
    dateToStart: 'July 1, 2022',
    numOfteamsParticipating: 4,
    teamsParticipating: ['team1', 'team2', 'team3', 'team4'],
    games: [
      games[1],      
      games[2],
      games[3],      
      games[4],
      games[5],      
      games[6],
    ],
  },
  {
    id: 'lg_2',
    title: 'League 2',
    status: 'receivingApp', // receiving app, started, ongoing, finished   
    createdBy: getUser('002'),
    gamePerTeam: 1,
    dateToStart: 'August 1, 2022',
    numOfteamsParticipating: 4,
    teamsParticipating: ['team1', 'team2', ],
    games: [
      games[7],      
      games[8],
      games[9],      
      games[10],
      games[11],      
      games[12],
    ],
  },
];

export function getLeagues() {
  return leagues;
}

export function getLeague(id) {
  console.log('getLeague', id);
  return leagues.find((l) => l.id == id);
}
