import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './section/Homepage';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Homepage />
        <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
