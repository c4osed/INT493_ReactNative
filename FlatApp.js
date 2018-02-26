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

const rows = [
  {id: 0, text: 'Banana'},
  {id: 1, text: 'Apple'},
  {id: 2, text: 'Cherry'},
  {id: 3, text: 'Mango'},
  {id: 4, text: 'Lime'},
]

const extractKey = ({id}) => id.toString()

export default class App extends Component {
  
  renderItem = ({item}) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }
  
  render() {
    return (
      <FlatList
        style={styles.container}
        data={rows}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
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
