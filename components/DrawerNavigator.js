import * as React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer'
import TabNavigator from './TabNavigator'
import CustomBarMenu from './CustomBarMenu'
import SettingsScreen from '../screens/SettingsScreen'

const AppDrawerNavigator= createDrawerNavigator(
{ Home:{screen:TabNavigator},
 Settings:{screen:SettingsScreen}
   },
{containComponent:CustomBarMenu},
{intialRouteName:'Home'}   

)

export default AppDrawerNavigator;