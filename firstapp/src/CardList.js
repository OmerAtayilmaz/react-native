import React,{Component} from 'react';
import{View,Text,ScrollView} from 'react-native';
import axios from 'axios';
import CardDetail from './CardDetail';
import uuid from 'react-native-uuid';
class CarList extends Component{
    constructor(){
        super();
        this.state={
            carList:[]
        };
    }
    componentDidMount(){
        axios.get('http://givecars.herokuapp.com/')
        .then((response)=>this.setState({carList:response.data}))
        .catch(_=>console.log("Something went wrong!"))
    }
    render(){
        return(
<ScrollView>
        <View>
           {this.state.carList.map(e=><CardDetail key={uuid.v4()} car={e}/>)}
        </View>
        </ScrollView>
    )
    }
}


export default CarList;