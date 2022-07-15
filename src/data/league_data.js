import {getUsers, getUser} from './user_data.js'
import {getGames} from './game_data.js'
let games = getGames()

let leagues = [
  {
    id: 'lg_1',
    title: 'League 1',
    description: 'League 1',
    status: 'app', // app, beforeStart, started,  finished 
    published: 'true', // false   
    createdBy: getUser('001'),
    gamePerTeam: 1,
    leagueToStart: 'Sep 1, 2022',
    leagueToEnd: 'Sep 2, 2022',
    appToStart: 'Sep 1, 2022',
    appToEnd: 'Sep 2, 2022',
    location: ' gym court a',
    numOfteamsParticipating: 4,
    teamsParticipating: ['team1', 'team2', ],
    games: [
      games[0],
      games[1],      
      games[2],
      games[3],      
      games[4],
      games[5],      
    ],
  },
  {
    id: 'lg_2',
    title: 'League 2',
    description: 'League 2 desc',
    status: 'started', // app, beforeStart, started,  finished
    published: 'true', // false
    createdBy: getUser('002'),
    gamePerTeam: 1,
    dateToStart: 'August 1, 2022',
    dateToEnd: 'Augst 7, 2022',
    appToStart: 'Sep 1, 2022',
    appToEnd: 'Sep 2, 2022',
    location: ' gym court b',
    numOfteamsParticipating: 4,
    teamsParticipating: ['team1', 'team2', 'team3', 'team4'],
    games: [
      games[6],
      games[7],      
      games[8],
      games[9],      
      games[10],
      games[11],      
    ],
  },
  {
    id: 'lg_3',
    title: 'League 3',
    description: 'League 3 desc',
    status: 'completed', // app, beforeStart, started,  finished   
    published: 'true', // false
    createdBy: getUser('003'),
    gamePerTeam: 1,
    dateToStart: 'Jul 1, 2022',
    dateToEnd: 'July 1, 2022',
    appToStart: 'Sep 1, 2022',
    appToEnd: 'Sep 2, 2022',
    location: ' gym court b',
    numOfteamsParticipating: 2,
    teamsParticipating: ['team1', 'team2'],
    games: [
      games[12],      
      games[13],
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
