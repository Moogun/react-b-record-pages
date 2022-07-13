import React, { useState, createContext } from 'react';
import { fakeAuthProvider } from './auth.js';

import { signin_test, signout_test } from './pages/loginSlice';

import {getUser} from './data/user_data.js'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  let user = getUser('001')
  console.log('[authProvider]', user)
  
  // const [user, setUser] = useState({username: u.username, password: 'bbc'})

  // let user = useSelector((state) => {
  //   // console.log('[authProvider]', state)
  //   return state.user.value
  // });

  // 'fakeAuthProvider' is useless for now 
  // as 'authProvider' serves 'user' with createContext here 

  let signin = (newUser, callback) => {
    console.log('[authProvider] newUser', newUser)
    // return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    // });
  };

  let signout = (callback) => {
    // return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    // });
  };

  // let signin = (callback) => {
  //   dispatch(signin_test())
  // }
  // let signout = (callback) => {
  //   dispatch(signout_test())

  let value = { user, signin, signout };
  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
}
