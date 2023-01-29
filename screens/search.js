import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
// import BottomTabNavigator.response from "./components/BottomTabNavigator";

export default function SearchScreen (){
  
  useFocusEffect(
    React.useCallback(() => {
      
      alert('search')
      return () => {
        // alert('Screen was unfocused');

      };
    }, []));
    
    return (
    <View style={styles.container}>
      <Text style ={styles.text}>welcome to search screen</Text>
    </View>
  );
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
        margin:15,
        borderRadius:10
    }
})

