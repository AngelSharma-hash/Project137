import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home"
import Information from "./Screens/Star_info"

const appStackNavigator = createStackNavigator({
  Home :{
    screen:Home,
    navigationOptions:{headerShown:False}
  },
  Info:{
    screen:Information
  }

}, {initialRouteName:"Home"})

const AppContainer=createAppContainer(appStackNavigator)

export default function App() {
  return (
    <AppContainer/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
