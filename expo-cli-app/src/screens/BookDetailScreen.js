import React from "react";
import { StyleSheet,View,Text } from "react-native";

const BookDetailScreen=(props)=>{
    const data=props.navigation.getParam('book');
    return (
        <View>
            <Text>Book Detail:{data.author}</Text>
        </View>
    )
}

export default BookDetailScreen;