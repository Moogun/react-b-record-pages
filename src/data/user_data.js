// import { user } from './user.js';

let users = [
  {
    id: '001',
    username: 'moo',
    myTeams: [
      {
        id: '001',
        name: 'Santa Monica',
        createdBy: '001',
        managers: ['001', '112'],
      },
      {
        id: '002',
        name: 'Stankonia',
        createdBy: '114',
        managers: ['114', '115'],
      },
    ],
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
