import React, {Component} from "react";
import {View, Text, Flatlist, StyleSheet, Alert, SafeAreaView} from "react-native"
import {ListItem} from "@rneui/themed"
import axios from "axios";

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {list_data:[], URL:"http://localhost:5000/"}
    }
    getStarInfo=()=>{
        const {URL}=this.state
        axios.get(URL).then(response=>{return this.setState({list_data:response.data.data})}).catch(error=>{Alert.alert(errorrror.message)})
    }
    renderItem = ({item, index})=>(
        <ListItem key={index}
        title={`Star:${item.name}`}
        subtitle={`Distance from Earth:${item.distance_from_earth}`}
        bottomDivider
        chevron
        onPress = {()=>this.props.navigation.navigate("Details", {star_name:item.name})}></ListItem>
    )
    keyExtractor = (item,index)=>index.toString()
    render(){
        
    }
}