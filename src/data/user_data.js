// import { user } from './user.js';

let users = [
  {
    id: '001',
    username: 'moo',
    myTeams: [
      {
        id: 't01',
        name: 'Santa Monica',
        createdBy: '001',
        managers: ['001', '112'],
      },
      {
        id: 't02',
        name: 'Stankonia',
        createdBy: '114',
        managers: ['114', '115'],
      },
      {
        id: '003',
        name: 'Moogun',
        createdBy: '001',
        managers: ['001', '115'],
      },
    ],
    myLeagues: [
      {
        id: 'lg_1',
        title: '제23회 대한체육회장배 전국생활체육농구대회',
        description: '생활체육',
        status: 'app', // app, beforeStart, started,  finished 
        published: 'true', // false   
        createdBy: {
          id: '002',
          username: 'James',
        },
        gamePerTeam: 1,
        leagueToStart: 'Sep 1, 2022',
        leagueToEnd: 'Sep 2, 2022',
        appToStart: 'Sep 1, 2022',
        appToEnd: 'Sep 2, 2022',
        location: ' gym court a',
        numOfteamsParticipating: 4,
        teamsParticipating: ['team1', 'team2', ],
        games: [],
      }, {
        id: 'lg_2',
        title: 'League ',
        description: 'League ',
        status: 'app', // app, beforeStart, started,  finished 
        published: 'true', // false   
        createdBy: {
          id: '002',
          username: 'James',
        },
        gamePerTeam: 1,
        leagueToStart: 'Sep 1, 2022',
        leagueToEnd: 'Sep 2, 2022',
        appToStart: 'Sep 1, 2022',
        appToEnd: 'Sep 2, 2022',
        location: ' gym court a',
        numOfteamsParticipating: 4,
        teamsParticipating: ['team1', 'team2', ],
        games: [],
      },
    ]
  },
  {
    id: '002',
    username: 'James',
  },
  {
    id: '003',
    username: 'Vivi',
  },
  {
    id: '111',
    username: 'a',
  },
  {
    id: '112',
    username: 'b',
  },
  {
    id: '113',
    username: 'c',
  },
  {
    id: '117',
    username: 'i',
  },
  {
    id: '118',
    username: 'j',
  },
  {
    id: '120',
    username: 'k',
  },
  {
    id: '121',
    username: 'l',
  },
  {
    id: '122',
    username: 'm',
  },
  {
    id: '123',
    username: 'n',
  },
  {
    id: '124',
    username: 'n',
  },
  {
    id: '125',
    username: 'n',
  },
  {
    id: '130',
    username: 'o',
  },
  {
    id: '131',
    username: 'p',
  },
  {
    id: '132',
    username: 'q',
  },
];

export function getUsers() {
  return users;
}

export function getUser(id) {
  console.log('[data user] getUser()', id);
  return users.find((u) => u.id == id);
}
