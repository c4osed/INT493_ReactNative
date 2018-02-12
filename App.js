/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Image, StyleSheet, Text, View} from 'react-native';
import ToggleButton from './src/ToggleButton'

// const instructions = Platform.select({   ios: 'Press Cmd+R to reload,\nCmd+D
// or shake for dev menu',   android: 'Double tap R on your keyboard to
// reload,\nShake or press menu button for dev men' +       'u' });

export default class App extends Component < {} > {
  render() {
    return (
      <View style={styles.container}>
        <ToggleButton/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  counter: {
    fontSize: 20,
    color: 'blue'
  }
})