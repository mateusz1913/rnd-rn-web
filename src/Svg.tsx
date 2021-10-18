import React from 'react';
import { View } from 'react-native';
import Svg, { Defs, G, Path, TSpan, Text, TextPath } from 'react-native-svg';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SharedElement } from 'react-navigation-shared-element';

import { styles } from './styles';

const path = `
  M 10 20
  C 40 10 60  0 80 10
  C 100 20 120 30 140 20
  C 160 10 180 10 180 10
`;

const SvgExample: React.FC = () => {
  return <View style={styles.container}>
    <SharedElement id="svg">
      <MaterialCommunityIcon
        name="svg"
        color="green"
        size={300}
      />
    </SharedElement>
    <Svg height="100" width="200">
      <Defs>
        <Path id="path" d={path} />
      </Defs>
      <G y="20">
        <Text fill="blue">
          <TextPath href="#path" startOffset="-10%">
            We go up and down,
            <TSpan fill="red" dy="5,5,5">
              then up again
            </TSpan>
          </TextPath>
        </Text>
        <Path d={path} fill="none" stroke="red" strokeWidth="1" />
      </G>
    </Svg>
  </View>;
};

export default SvgExample;
