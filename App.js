/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

class Em extends Component{
  render(){
    return(
      <Text style={{fontStyle:"italic"}}>
        {this.props.children}
      </Text>
    )
  }
}

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = { text: ''}
  }
  render() {
    return (
      <View
        style={{
        // flexDirection: 'row',
        flexDirection: 'column',
        height: 500,
        padding: 20
      }}>
        <View style = {{backgroundColor: 'blue',flex: 0.3}}/>
        <View style = {{backgroundColor: 'red',flex: 0.5}}/>
        <Text style = {{fontStyle:"italic"}}>Hello World</Text>
        <Text><Em>Hello World</Em></Text>
        <TextInput
          style={{
            height:40,borderColor:'green',
            borderWidth:1
          }}
          placeholder = "Type here to translate!"
          onChangeText = {(text) => this.setState({text})}
          onSubmitEditing = {()=>console.log(this.state.text)}
          value = {this.state.text}
        />
      </ View>
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
  }
});
