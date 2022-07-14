import React from 'react';
import { View, Heading, useTheme } from '@aws-amplify/ui-react';

export default function LeagueApp({  }) {
  const { tokens } = useTheme();
  return (
    <View
      //  padding={tokens.space.medium}
      paddingTop={tokens.space.medium}
      // backgroundColor={tokens.colors.blue[20]}
    >
      <Heading
        level={3}
        style={{ borderBottom: 'solid 1px', borderColor: 'lightGray' }}
      >
        신청
      </Heading>
    </View>
  );
}
