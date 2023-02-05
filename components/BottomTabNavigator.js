import SearchScreen from "../screens/search";
import TransactionScreen from "../screens/transaction";
import { Component, React } from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Text, View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BarCodeScanner } from "expo-barcode-scanner";

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  constructor() {
    super();
    this.state = { color: "#a299ff" };
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          shifting={true}
          style={{overflow: 'hidden', borderRadius: 49, flex: 1, justifyContent: "center" }}
          barStyle={{
            backgroundColor: this.state.color,
            margin: 10,
            position: "absolute",
          }}
          initialRouteName="Search"
          activeColor="red"
          inactiveColor="black"
        >
          <Tab.Screen
            name="Transaction"
            component={TransactionScreen}
            options={{
              tabBarActiveBackgroundColor: "red",
              tabBarLabel: "Transaction",
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
    backgroundColor: "black",
    width: "50%",
    height: "75%",
    elevation: 0,
    bottom: 0,
    borderRadius: 15,
    shadowColor: "red",
    shadowOffset: 15,
    shadowOpacity: 5,
  },
});
