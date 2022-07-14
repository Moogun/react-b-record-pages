import React, {useContext} from 'react';
import { AuthContext } from '../../authProvider.js';
import { Heading, Text } from '@aws-amplify/ui-react';

export default function Settings() {
  let auth = useContext(AuthContext);
  console.log('[settings]', auth);
  return (
    <div>
       <Heading level={5}> Settings </Heading>
      </div>
  )
}