import React from "react";
import {View,Text,ScrollView} from 'react-native';
 
const Item=(props)=>{
    return <View style={styles.viewStyle} >
        {props.children}
    </View>
}

const styles={
    viewStyle:{
        borderWith:5,
        borderColor:"gainsboro",
        shadowColor:"black",
        borderBottomWidth:0,
        shadowOffSet:{width:1,height:1},
        shadowOpacity:0.1,
        marginLeft:5,
        marginRight:5,
        marginTop:10,
        backgroundColor:'white'
    }
};

export default Item;