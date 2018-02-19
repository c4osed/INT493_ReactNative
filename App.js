/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex:1,flexDirection:'row'}}>
        <View style={{flex:0.3}}>
          <View style={{flex:0.2,backgroundColor:'yellow'}}/>
          <View style={{flex:0.4,backgroundColor:'green'}}/>
          <View style={{flex:0.4,backgroundColor:'blue'}}/>
        </View>
        <View style={{flex:0.7,backgroundColor:'black'}}>
          <View style={{flex:0.6,backgroundColor:'red'}}/>
          <View style={{flex:0.4,flexDirection:'row'}}>
            <View style={{flex:0.7,backgroundColor:'green'}}/>
            <View style={{flex:0.3}}>
              <View style={{flex:0.5,backgroundColor:'yellow'}}/>
              <View style={{flex:0.5,backgroundColor:'red'}}/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
