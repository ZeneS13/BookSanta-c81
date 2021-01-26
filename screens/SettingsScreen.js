import * as React from 'react'
import {Text,View,TouchableOpacity,StyleSheet,TextInput, Alert} from 'react-native'
import db from '../config'
import firebase from 'firebase'


export default class SettingsScreen extends React.Component{
constructor(){
    super()
   this.state={
       firstName:"",
       lastName:"",
       address:"",
       number:"",
       docId:""
   }
}
  getUserDetails= async ()=>{
     var email= firebase.auth().currentUser.email
    
     var query= await db.collection("users").where('emailId', '==', email).get()
     query.docs.map((doc)=>{
      
     var data = doc.data()
     this.setState({
         firstName:data.firstName,
         lastName: data.lastName,
         address:data.address,
         number:data.contactNumber,
         docId:data.id

     })
      })
  }

  componentDidMount=()=>{
      this.getUserDetails()
  }

  updateUser=()=>{
    db.collection("users").doc(this.state.docId).update({
        firstName:this.state.firstName,
        lastName: this.state.lastName,
        address:this.state.address,
        contactNumber:this.state.number
    })
    return(
    Alert.alert("User details successfully updated"))
  }

render(){
    return(
        <View>
       <TextInput
       value={this.state.firstName}
       onChangeText={(text)=>{
        this.setState({firstName:text})
        }}>
       </TextInput>

       <TextInput
        value={this.state.lastName}
        onChangeText={(text)=>{
            this.setState({lastName:text})
            }}>
         </TextInput>

       <TextInput
        value={this.state.address}
        onChangeText={(text)=>{
            this.setState({address:text})
            }}>

       </TextInput>

       <TextInput
        value={this.state.number}
        onChangeText={(text)=>{
            this.setState({number:text})
            }}> </TextInput>


        <TouchableOpacity
        onPress={()=>{
            this.updateUser()
        }}
        >
            <Text> Save </Text>
            </TouchableOpacity>    



        </View>
    )
}





}
 