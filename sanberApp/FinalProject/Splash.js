import React,{Component} from 'react';
import {View,ImageBackground,Image} from 'react-native';



export default class Splash extends Component
{
    render(){
        return(
        <View 
        style={{flex:1, justifyContent:'center',alignItems:'center',backgroundColor:'blue'}}>
            <Image 
            source={'./logo.png'}
            style={{height:100,width:100}}></Image>

        </View>
            
        );
    }

}