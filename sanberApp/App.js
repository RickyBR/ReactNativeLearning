import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Platform,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

export default function App() {
  return (
   <View style={styles.container}>
      <View style={styles.navBar}>
          <Image source={require('./assets/logo.png')} style={{width:100,height:22}}/>
          <View style={styles.rightNav}>

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
    alignItems:'center'
  }
});
