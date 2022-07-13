import React from 'react';
import { View, Heading, useTheme } from '@aws-amplify/ui-react';

export function PageHeader({ title }) {
  const { tokens } = useTheme();

  return (
    <View
      //  padding={tokens.space.medium}
      paddingTop={tokens.space.medium}
    >
      <Heading
        level={3}
        style={{ borderBottom: 'solid 1px', borderColor: 'lightGray' }}
      >
        {title}{' '}
      </Heading>
    </View>
  );
}
