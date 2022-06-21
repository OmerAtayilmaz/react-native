import React from 'react';
import {Text,View} from 'react-native';

const Test=(props)=>{
    const {textStyling,viewStyle}=styles;
    const {headerTitle}=props.data;
    return(
        <View style={viewStyle}>
            <Text style={textStyling}>{headerTitle}</Text>
        </View>
    );
}

const styles={
    textStyling:{ 
        fontSize:25,
        color:'#ededed',

        
    },
    viewStyle:{
        backgroundColor:'gainsboro',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
}
export default Test;