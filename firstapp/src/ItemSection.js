import React from 'react';
import {View} from 'react-native';



const ItemSection=(props)=>{
    return <View style={styles.viewStyle}>{props.children}</View>
}

const styles={
    viewStyle:{
        borderBottomWith:1,
        borderColor:"black",
        padding:5,
        flexDirection:"row",
        justifyContent:'center',
        position:'relative'
    }
}
export default ItemSection;