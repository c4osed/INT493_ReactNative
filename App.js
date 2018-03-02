/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';

import ScrollApp from './ScrollApp'
import FruitApp from './FruitApp'
import FruitApp2 from './FruitApp2'
import FlatApp from './FlatApp'
import SectApp from './SectApp'
import ContactsData from './ContactsData'
import ContactItem from './ContactItem'



type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { data:[]}
    ContactsData.fetchContacts()
      .then(contacts=>{console.log(contacts);
      this.setState({data:contacts});})
      .catch(error=>{console.log(error)});
  }

  _renderContact = ({item})=>{
    const picsrc = item.firstname.toLowerCase()+'.jpeg'
    const imgurl = 'http://web.sit.kmutt.ac.th/sanit/int493/contacts/img/'+picsrc
    return (
      <ContactItem item={item} imgurl={imgurl}/>
    )
  }
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
        data = {this.state.data}
        renderItem={this._renderContact}
        keyExtractor={(item,index) => index.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    justifyContent:'center',
    backgroundColor:'#F5FCFF'
  },
}) ;