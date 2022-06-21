import React from 'react';
import {Text,AppRegistry, View} from 'react-native';
import Header from './src/Header';
import CarList from './src/CardList';
const App=()=>{
    const payload={
        headerTitle:"Cars Autogarage"
    }
  
    return(
        <View>
            <Header data={payload}/>
            <CarList/>
        </View>
    )
}

AppRegistry.registerComponent('firstapp',()=>App);