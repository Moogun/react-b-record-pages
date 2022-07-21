import {getUsers, getUser} from './user_data.js'
import {getGames} from './game_data.js'
let games = getGames()

let leagues = [
  {
    id: 'lg_1',
    title: '제23회 대한체육회장배 전국생활체육농구대회',
    description: '생활체육',
    status: 'app', // app, beforeStart, started,  finished 
    published: 'true', // false   
    createdBy: getUser('001'),
    gamePerTeam: 1,
    leagueToStart: '22년 9월 1일',
    leagueToEnd: '22년 9월 2일',
    appToStart: '22년 8월 25일',
    appToEnd: '22년 8월 28일',
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
    standing: [
      1,2,3
    ],
  },
  {
    id: 'lg_2',
    title: '제103회 전국체육대회',
    description: '엘리트대회',
    status: 'started', // app, beforeStart, started,  finished
    published: 'true', // false
    createdBy: getUser('002'),
    gamePerTeam: 1,
    leagueToStart: '22년 9월 1일',
    leagueToEnd: 'August 1, 2022',
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
    standing: [

    ],
  },
  {
    id: 'lg_3',
    title: '제22회 문화체육관광부장관배 전국생활체육농구대회',
    description: '생활체육',
    status: 'completed', // app, beforeStart, started,  finished   
    published: 'true', // false
    createdBy: getUser('003'),
    gamePerTeam: 1,
    leagueToStart: 'Jul 1, 2022',
    leagueToEnd: 'July 1, 2022',
    appToStart: 'Sep 1, 2022',
    appToEnd: 'Sep 2, 2022',
    location: ' gym court b',
    numOfteamsParticipating: 2,
    teamsParticipating: ['team1', 'team2'],
    games: [
      games[12],      
      games[13],
    ],
    standing: [

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
