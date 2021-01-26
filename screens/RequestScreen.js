import * as React from 'react';
import {Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity,StyleSheet} from 'react-native';
import firebase from 'firebase'
import db from '../config'
export default class RequestScreen extends React.Component{
 constructor(){
    super()
    this.state={
        bookName:"",
        reason:"",
        userId:firebase.auth().currentUser.email
    }

 }
  /*addRequest=async()=>{
      var uniqueId= this.createUniqueId()
       db.collection("requestingBook").add({
        bookName:this.state.bookName,
        reason:this.state.reason,
        userId:this.state.userId,
        requestId:uniqueId
    
    })  
    this.setState({
        bookName:"",
        reason:""
    })
    return(
    alert("Request is successfully added")
    )
  }

  createUniqueId=()=>{
      return(
          Math.random().toString(36).substring(7)
      )
  }
 */
render(){
    return(
        <View>
        <View>
        <TextInput
        style={styles.formTextInput}
        placeholder="Enter Book Name"
        onChangeText={(text)=>{
            this.setState({bookName:text})
        }}></TextInput>

        <TextInput
        style={styles.formTextInput}
        placeholder="Enter Reason why"
        onChangeText={(text)=>{
            this.setState({reason:text})
        }}>  </TextInput>
        </View>
        <View>
          <TouchableOpacity
          style={styles.button}
          onPress={()=>{this.addRequest()}}> 
          <Text>Request </Text>
          </TouchableOpacity>
        </View>
        </View>    
    )
}


}
const styles = StyleSheet.create({ 
keyBoardStyle : { 
    flex:1, alignItems:'center', justifyContent:'center' }, 
formTextInput:{ 
    width:"75%", height:35, alignSelf:'center', borderColor:'#ffab91', borderRadius:10, borderWidth:1, marginTop:20, padding:10, },
button:{ 
    width:"75%", height:50, justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:"#ff5722", shadowColor: "#000", 
shadowOffset: {
     width: 0, height: 8, }, shadowOpacity: 0.44, shadowRadius: 10.32, elevation: 16, marginTop:20 }, } )