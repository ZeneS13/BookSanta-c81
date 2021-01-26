import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase'

export default class CustomBarMenu extends React.Component{
    render(){
        return(
            <View>
              <View>
                <DrawerItems
                {...this.props}>
                </DrawerItems>
              </View>  
              <View>
                  <TouchableOpacity
                  onPress={()=>{
                   this.props.navigation.navigate("Login");
                   firebase.auth().signOut()
                   
                  }}>
                   <Text>LOG OUT</Text>   
                  </TouchableOpacity>
              </View>
            </View>
        )
    }
}