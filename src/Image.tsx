import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import { styles as commonStyles } from './styles';

const ImageExample: React.FC = () => {
  return <View style={commonStyles.container}>
    <SharedElement id="image">
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={styles.image}
      />
    </SharedElement>
  </View>;
};

const styles = StyleSheet.create({
  image: {
    height: 400,
    width: 400,
  },
});

export default ImageExample;
