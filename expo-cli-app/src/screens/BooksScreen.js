import React from "react";
import { StyleSheet,View,Text,FloatList,TouchableOpacity } from "react-native";

import BookList from "../components/BookList";
const BooksScreen=(props)=>{
    return (
        <View>
                <Text >Go to Book Detail Screen</Text>
            <BookList />
        </View>
    )
}


const styles=StyleSheet.create({
    buttonStyle:{
        backgroundColor:'orange',
        paddingHorizontal:25,
        paddingVertical:15,
        color:'white',
        fontSize:16,
        borderRadius:15,
        margin:12,
    }
});

export default BooksScreen;