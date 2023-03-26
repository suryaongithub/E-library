import SearchScreen from "../screens/search";
import TransactionScreen from "../screens/transaction";
import { Component, React } from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Text, View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  constructor() {
    super();
    this.state = { color: "#565bda" };
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          shifting={true}
          style={{
            position: "relative",
            bottom: 0,
            left: 0,
            width: "100%",
            // borderRadius: 15,
          }}
          barStyle={{
            backgroundColor: this.state.color,
            position: "absolute",
            bottom: 0,
            height: 75,
          }}
            screenOptions={({ route, color, size }) => ({
              tabBarIcon: (focused, color, size) => {
                let iconName;
                if (route.name === "Transaction") {
                  iconName = "book";
                } else if (route.name === "Search") {
                  iconName = "search";
                }

                return <Ionicons name={iconName} size={23} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: "#FFFFFF",
              inactiveTintColor: "black",
              style: {
                height: 130,
                borderTopWidth: 0,
                backgroundColor: "#5653d4",
              },
              labelStyle: { fontSize: 20, fontFamily: "Rajdhani_600SemiBold" },
              labelPosition: "beside-icon",
              tabStyle: {
                marginTop: 25,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 30,
                borderWidth: 2,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#5653d4",
              },
            }}
          initialRouteName="Search"
          activeColor="#afb1b0"
          inactiveColor="#783937FF"
        >
          <Tab.Screen
            name="Transaction"
            component={TransactionScreen}
            options={{
              tabBarActiveBackgroundColor: "red",
              tabBarLabel: "Transaction",
              // tabBarIcon: ({ color }) => (
              //   <MaterialCommunityIcons
              //     name="swap-horizontal"
              //     color={color}
              //     size={26}
              //   />
              // ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarLabel: "search",
              // tabBarIcon: ({ color }) => (
              //   <MaterialCommunityIcons
              //     name="book-search"
              //     color={color}
              //     size={26}
              //   />
              // ),
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
    margin: 15,
  },
});
