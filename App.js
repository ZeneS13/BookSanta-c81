import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import TabNavigator from './components/TabNavigator'
import AppDrawerNavigator from './components/DrawerNavigator'

export default class App extends React.Component{

render(){
  return(
    <AppContainer/>
    
  )
}

}
const SwitchNavigator = createSwitchNavigator({
  Login:{screen:LoginScreen},
  Drawer:{screens:AppDrawerNavigator}
 })

const AppContainer=createAppContainer(SwitchNavigator) 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
