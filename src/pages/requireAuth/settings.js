import React, {useContext} from 'react';
import { AuthContext } from '../../authProvider.js';

export default function Settings() {
  let auth = useContext(AuthContext);
  console.log('[settings]', auth);
  return (
    <div>settings</div>
  )
}