import React from 'react';
import { View, Heading, Flex, useTheme, Text } from '@aws-amplify/ui-react';

export function PageHeader({ title }) {
  const { tokens } = useTheme();

  return (
    <View
    //  padding={tokens.space.medium}
    // paddingTop={tokens.space.medium}
    // paddingBottom={tokens.space.medium}
    // backgroundColor={tokens.colors.blue[20]}
    >
      {/* <Heading
        level={6} fontWeight={tokens.fontWeights.thin}
        // style={{ borderBottom: 'solid 1px', borderColor: 'lightGray' }}
      >
        to set 14 px {title}{' '}
      </Heading>
     */}

      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        alignContent="space-around"
        wrap="nowrap"
        gap="1rem"
      >
        <View>  <Text> {title} </Text></View>
        <View backgroundColor={tokens.colors.blue[40]}>
          test
        </View>
      </Flex>

     
    </View>
  );
}

export function DescriptionBadge({ vari, text1 }) {
  return (
    <Badge variation={vari} size="small">
      {' '}
      {text1}
    </Badge>
  );
}

export function DescriptionText({ text1, text2, text3 }) {
  return (
    <Text as="p" color="gray" lineHeight="rem" fontSize=".8rem">
      {text1}: {text2} - {text3}
    </Text>
  );
}
