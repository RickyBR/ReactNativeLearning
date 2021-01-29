import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,AppRegistry } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from './Tugas/tugas13/Login';


export default class App extends Component {
  render(){
    return(
      <Login />
     
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});
