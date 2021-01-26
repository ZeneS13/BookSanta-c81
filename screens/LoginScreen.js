import React from 'react';
import { Text,
   View,
   TouchableOpacity,
   TextInput,
   Alert,
   Modal,
   ScrollView,
   KeyboardAvoidingView,
  StyleSheet} from 'react-native';
import * as firebase from 'firebase'
import db from '../config'


export default class LoginScreen extends React.Component{
constructor(){
    super()
    this.state={
        email:"",
        password:"",
        isVisible:false,
        firstName:"",
        lastName:"",
        contact:"",
        confirmPassword:"",
        address:""
    }
}

showModal=()=>{
    return(
        <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isVisible}>
            <View>
                <ScrollView>
                    <KeyboardAvoidingView>
                        <Text>REGISTRATION</Text>

                        <TextInput
                           placeholder="Enter First Name"
                           maxLength={10}
                           onChangeText={(text)=>{
                           this.setState({firstName:text})
                           }}
                        ></TextInput>
                        
                        <TextInput
                           placeholder="Enter Last Name"
                           maxLength={10}
                           onChangeText={(text)=>{
                           this.setState({lastName:text})
                           }}
                        ></TextInput>
                        
                        <TextInput
                           placeholder="Enter contact number"
                           maxLength={10}
                           onChangeText={(text)=>{
                           this.setState({contact:text})
                           }}
                           
                        ></TextInput>
                        
                        <TextInput
                           placeholder="Enter address"
                           multiline={true}
                           onChangeText={(text)=>{
                           this.setState({address:text})
                           }}
                           keyboardType='email-address'
                        ></TextInput>
                        
                        <TextInput
                           placeholder="Enter email id"
                           onChangeText={(text)=>{
                           this.setState({email:text})
                           }}
                           keyboardType='email-address'
                        ></TextInput>
                        
                        <TextInput
                           placeholder="Enter password"
                           
                           secureTextEntry={true}
                           onChangeText={(text)=>{
                           this.setState({password:text})
                           }}
                           
                        ></TextInput>
                        
                        <TextInput
                           placeholder="Confirm Password"
                           
                           secureTextEntry={true}
                           onChangeText={(text)=>{
                           this.setState({confirmPassword:text})
                           }}
                        ></TextInput>
                        <View>
                        <TouchableOpacity
                          onPress={()=>{this.userSignUp(this.state.email , this.state.password,this.state.confirmPassword)}}
                        >
                         <Text>Register</Text>
                        </TouchableOpacity>
                        </View> 

                        <View>
                        <TouchableOpacity
                          onPress={()=>{this.setState({isVisible:false})}}
                        >
                         <Text>Cancel</Text>
                        </TouchableOpacity>
                        </View> 

                        
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
            
        </Modal>
    )
}

login=async(email,password)=>{
    if(email && password){
        try{
            const response = await firebase.auth().signInWithEmailAndPassword(email,password)
            this.props.navigation.navigate('Donate')
            
        }
        catch(error){
          if(error.code=='auth/user-not-found'){
            alert("not a valid user")  
          }
          else if(error.code=='auth/invalid-email'){
            alert("wrong email id")
          }
        }
    }
    else{
       alert("enter username, password")  
    }
}

userSignUp=async(email,password,confirmPassword)=>{
    if(password!==confirmPassword){
        return(alert("Password doesn't match please recheck"))
    }
    else{
     firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
        db.collection("users").add({
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            address:this.state.address,
            contactNumber:this.state.contact,
            emailId:this.state.email,
            password:this.state.password,
            confirmPassword:this.state.confirmPassword
        })
        return( Alert.alert(
            "User added successfully",
            " user added",
            [
              { text: "OK", onPress: () => {this.setState({isVisible:false})} }
            ],
            
          )
      )
     }).catch((error)=>{
        return(alert(error.message))
     })
    } 
}

render(){
    return (
     <View style={styles.container}>
         <View style={styles.profileContainer}>
             {this.showModal()}
         </View >
         <View style={styles.buttonContainer}>
         <TextInput style={styles.loginBox}
         placeholder="Enter email id"
         onChangeText={(text)=>{
             this.setState({email:text})
         }}
         keyboardType='email-address'
         ></TextInput>

         <TextInput style={styles.loginBox}
         placeholder="Enter password"
         onChangeText={(text)=>{
             this.setState({password:text})
         }}
         secureTextEntry={true}>

         </TextInput>
         <TouchableOpacity style={[styles.button,{marginBottom:20, marginTop:20}]}
         onPress={()=>{this.login(this.state.email , this.state.password)}}
         >
         <Text style={styles.buttonText}>Login</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={styles.button}
         onPress={()=>{this.setState({isVisible:true})}}>
            <Text style={styles.buttonText}>Sign Up Instead</Text> 
         </TouchableOpacity>
     </View>
     </View>
    )
}   

}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#F8BE85'
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    title :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color : '#ff3d00'
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#ff8a65',
      fontSize: 20,
      margin:10,
      paddingLeft:10
    },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ff9800",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText:{
      color:'#ffff',
      fontWeight:'200',
      fontSize:20
    },
    buttonContainer:{
      flex:1,
      alignItems:'center'
    }
  })
