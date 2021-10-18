import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SharedElement } from 'react-navigation-shared-element';

import { styles as commonStyles } from './styles';

/**
 * https://github.com/software-mansion/react-native-reanimated/blob/master/Example/src/AnimatedStyleUpdateExample.tsx
 */
const Reanimated: React.FC = () => {
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  return <View style={commonStyles.container}>
    <SharedElement id="anim">
      <MaterialCommunityIcon
        name="animation-play"
        color="green"
        size={300}
      />
    </SharedElement>
    <Animated.View style={[ styles.animatedElement, style ]} />
    <Button
      title="toggle"
      onPress={() => {
        randomWidth.value = Math.random() * 350;
      }}
    />
  </View>;
};

const styles = StyleSheet.create({
  animatedElement: {
    backgroundColor: 'black',
    height: 80,
    margin: 30,
    width: 100,
  },
});

export default Reanimated;
