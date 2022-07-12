import React, {useContext} from 'react';
import { AuthContext } from '../../authProvider.js';
import { Heading, Text } from '@aws-amplify/ui-react';

export default function Profile() {
  let auth = useContext(AuthContext);
  console.log('[Profile]', auth);
  return (
    <div>
      <Heading level={5}> Profile </Heading>
      <Text as="P" > {auth.user.username } {auth.user.password} </Text>
      </div>
  )
}