import React, { Component } from "react";
import BottomTabNavigator from "./components/BottomTabNavigator";
import { View , StyleSheet} from 'react-native'
import * as Font from 'expo-font'
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";

export default class App extends Component {

  constructor()
  {
    super()
    this.state = {fontLoaded: false}
  }
  componentDidMount()
  {
    this.loadFonts()
  }

  async loadFonts()
  {
    await Font.loadAsync({
      Rajdhani_600SemiBold:Rajdhani_600SemiBold
    })
    this.setState({fontLoaded: true})
  }
  
  render() {
    const {fontLoaded} = this.state
    if(fontLoaded){
    return (<BottomTabNavigator/>)
    }
  }
}

const styles = StyleSheet.create(
  {
    main:{
      backgroundColor:"grey"
    }
  })
