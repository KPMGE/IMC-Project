// a Simple hello world with react native

import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


// main class App
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello world!</Text>
      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'yellow'
  }
});
