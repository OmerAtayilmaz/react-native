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
        this.API={
            users:[
                {name:'aaa',email:"aaa@gmail.com"},
                {name:'bbb',email:"ccc@gmail.com"},
            ],
            products:[
                {code:'AXBB',name:'Phone',price:25.6,status:'active'},
                {code:'AXCC',name:'Computer',price:25.6,status:'deactive'}
            ]
        }
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
        <View>
            
           {this.API.products.map((e,i,all)=> <Text key={e.code}>Code:{e.code} Product{i+1}:{e.name}</Text>)}
        </View>
        </ScrollView>
    )
    }
}


export default CarList;