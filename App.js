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
  FlatList,
  Image
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
      <View style={styles.row}>
        <Image style={styles.picture} source={{url:imgurl}}/>
          <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.label}>{item.prefix}</Text>
              <Text style={styles.label}>{item.firstname} </Text>
              <Text style={styles.label}>{item.lastname}</Text>
            </View>
            <Text style={styles.grey}>Tel : {item.phone}</Text>
          <Text style={styles.grey}>Email : {item.email}</Text>
          </View>
      </View>
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
    alignItems:'stretch',
    backgroundColor:'#F5FCFF'
  },
  label:{
    fontSize:16
  },
  grey:{
    color:'grey'
  },
  picture:{
      height:50,
      width:50,
      resizeMode:'contain'
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    padding:5,
    borderWidth:1,
    borderColor:'#DDDDDD',
  }
}) ;