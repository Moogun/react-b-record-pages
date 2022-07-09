import React, {useContext} from 'react';
import { AuthContext } from '../../authProvider.js';

export default function Profile() {
  let auth = useContext(AuthContext);
  console.log('[Profile]', auth);
  return (
    <div>Profile</div>
  )
}