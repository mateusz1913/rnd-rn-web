import React from 'react';
import { View } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SharedElement } from 'react-navigation-shared-element';

import { styles } from './styles';

const Icons: React.FC = () => {
  return <View style={styles.container}>
    <SharedElement id="icon">
      <MaterialCommunityIcon
        name="check-circle"
        color="green"
        size={300}
      />
    </SharedElement>
  </View>;
};

export default Icons;
