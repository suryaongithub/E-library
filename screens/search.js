import {Component,useCallBack} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
// import BottomTabNavigator from "./components/BottomTabNavigator";

export default class SearchScreen extends Component{
  
  constructor() 
  {
    super()
    // this.useFocusEffect.bind(this)s
  }

    render(){
    return (
    <View style={styles.container}>
      <Text style ={styles.text}>welcome to search screen</Text>
    </View>
  );}
}

const styles = StyleSheet.create({
    text:{
        color:'#262335',
        fontSize:30,
        padding:50
    },
    container:{
        flex: 1,
        backgroundColor:'#f2c7ff',
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        borderRadius:10
    }
})

