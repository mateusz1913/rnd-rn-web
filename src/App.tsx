import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App: React.FC = () => {
  return <View style={styles.container}>
    <Text>Hello World!</Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1, 
    justifyContent: 'center',
  },
});

export default App;
