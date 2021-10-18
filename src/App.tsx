import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import Icons from './Icons';
import ImageExample from './Image';
import ListScreen from './ListScreen';
import Reanimated from './Reanimated';
import SvgExample from './Svg';

const Stack = createSharedElementStackNavigator();

const App: React.FC = () => {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen
        name="svg"
        component={SvgExample}
        sharedElements={() => {
          return [ 'svg' ];
        }}
      />
      <Stack.Screen
        name="icon"
        component={Icons}
        sharedElements={() => {
          return [ 'icon' ];
        }}
      />
      <Stack.Screen
        name="anim"
        component={Reanimated}
        sharedElements={() => {
          return [ 'anim' ];
        }}
      />
      <Stack.Screen
        name="image"
        component={ImageExample}
        sharedElements={() => {
          return [ 'image' ];
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>;
};

export default App;
