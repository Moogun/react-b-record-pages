import React from 'react';
import { Link } from 'react-router-dom';

import { useTheme, Text, View } from '@aws-amplify/ui-react';

export function Footer() {
  const { tokens } = useTheme();
  return (
    <View
      backgroundColor={tokens.colors.background.quaternary}
      padding={tokens.space.large}
    >
      <Text color={tokens.colors.neutral[40]}>Fineplay </Text>
      <Text fontSize="0.8rem" color={tokens.colors.neutral[40]}>
        Copyright Fineplay Corp. All rights reserved.{' '}
      </Text>
    </View>
  );
}
