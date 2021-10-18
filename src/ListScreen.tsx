import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SharedElement } from 'react-navigation-shared-element';

import { styles as commonStyles } from './styles';

const ListScreen: React.FC = () => {
  const navigation = useNavigation();

  return <View style={commonStyles.container}>
    <Pressable onPress={() => navigation.navigate('svg')}>
      <SharedElement id="svg">
        <MaterialCommunityIcon
          name="svg"
          color="green"
          size={60}
        />
      </SharedElement>
    </Pressable>
    <Pressable onPress={() => navigation.navigate('icon')}>
      <SharedElement id="icon">
        <MaterialCommunityIcon
          name="check-circle"
          color="green"
          size={60}
        />
      </SharedElement>
    </Pressable>
    <Pressable onPress={() => navigation.navigate('anim')}>
      <SharedElement id="anim">
        <MaterialCommunityIcon
          name="animation-play"
          color="green"
          size={60}
        />
      </SharedElement>
    </Pressable>
    <Pressable onPress={() => navigation.navigate('image')}>
      <SharedElement id="image">
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={styles.image}
        />
      </SharedElement>
    </Pressable>
  </View>;
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
});

export default ListScreen;
