/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';

const rows = ['Banana','Apple','Cherry','Mango', 'Lime'] ;


export default class App extends Component {
  
  renderItem = ({item}) => {
    return (
      <Text style={styles.row}>
        {item}
      </Text>
    )
  } ;
  
  render() {

    return (
      <FlatList
        style={styles.container}
        data={rows}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
});
