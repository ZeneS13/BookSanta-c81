import * as React from 'react';
import {Text,FlatList, TouchableOpacity, View} from 'react-native';
import db from '../config';
import firebase from 'firebase'

export default class DonateScreen extends React.Component{
    constructor(){
        super()
        this.state={
            RbookList:[]
        }
    }
    readRequest=()=>{
        db.collection("requestingBook").onSnapshot((doc)=>{
         var bookList=doc.docs.map((document)=>{
             document.data()
        })
        this.setState({RbookList:bookList})
        //alert("hi "+ bookList.length)
        alert(this.state.RbookList.length)
        })
    }

    componentDidMount=()=>{
        
        this.readRequest()
        
    }
render(){
    return(
        <View>
        {(this.state.RbookList.length===0)?(
        <View>
        <Text>
        List Of All Requested books
        </Text>
        </View>):(
            <FlatList
            data={this.state.RbookList}
            renderItem={({item})=>{
              <View style={{borderWidth:3}}>
               <Text>{"BookName:"+ item.bookName}</Text>
               <Text>{"Reason:"+ item.reason}</Text>
               <TouchableOpacity>
                   <Text>View Details</Text>
               </TouchableOpacity>
              </View>
            }}
            keyExtractor={(item,index)=>{
              index.toString()
              }}/>
              )
              }

        </View>      
        
    )
    
}


}