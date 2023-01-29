import SearchScreen from "../screens/search";
import TransactionScreen from "../screens/transaction";
import { Component, React } from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Text, View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  constructor() {
    super();

    this.state = { color: "#ff9347" };
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          style={styles.container}
          activeColor="#1bb6fe"
          inactiveColor="#262335"
          barStyle={{ backgroundColor: this.state.color }}
          shifting={true}
          initialRouteName="Search"
        >
          <Tab.Screen
            name="Transaction"
            component={TransactionScreen}
            options={{
              tabBarLabel: "Transaction",
              tabBarColor: "#42a5f5",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="swap-horizontal"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarLabel: "search",
              tabBarColor: "#fbc02d",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="book-search"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

function response(fro) {
  console.log("done");
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff9999",
  },
});
