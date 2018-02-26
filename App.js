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
  View,
  ScrollView,
  ListView
} from 'react-native';

import ScrollApp from './ScrollApp'
import FruitApp from './FruitApp'
import FruitApp2 from './FruitApp2'
import FlatApp from './FlatApp'
import SectApp from './SectApp'
import ContactsData from './ContactsData'



type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    fetch('http://web.sit.kmutt.ac.th/sanit/int493/contacts.php')
    .then(response => response.json())
    .then(data => console.log(data))
  }
  render() {
    return (
      // <ScrollApp/>
      // <FruitApp/>
      // <FruitApp2/>
      // <FlatApp/>
      <View>
        <Text>
          {()=>componentDidMount}
          </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  boxLarge: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
}) ;