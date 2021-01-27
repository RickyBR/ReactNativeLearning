import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Platform,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  return (
   <View style={styles.container}>
      <View style={styles.navBar}>
          <Image source={require('./assets/logo.png')} style={{width:100,height:22}}/>
          <TouchableOpacity>

          </TouchableOpacity>
          <View style={styles.rightNav}>
          <Icon style={styles.navItem} name="search" size={25}/>
          <Icon style={styles.navItem} name="account-circle" size={25}/>
          </View>
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  navBar : {
    height : 55,
    backgroundColor : 'white',
    elevation: 3,
    paddingHorizontal : 15,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between'
  },rightNav:{
    flexDirection:'row'
  },
  navItem: {
    marginLeft:25
  }
});
