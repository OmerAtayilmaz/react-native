import React from 'react';
import {Text} from 'react-native';

const Button=()=>(
    <Text style={styles.textModel}>Click Me!</Text>
)
const styles={
    textModel:{
        fontSize:20,
        color:'white',
        backgroundColor:'black',
        textAlign:'center',
        paddingLeft:5,
        paddingRight:5,
        paddingTop:10,
        paddingBottom:10,
        fontWeight: 'bold',
    }
}
export default Button;