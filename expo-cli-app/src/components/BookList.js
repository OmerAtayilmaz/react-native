import React from "react";
import { StyleSheet,View,Text,FlatList,TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import books from '../../data/books.json';
const BookList=(props)=>{
    return (
        <View>
            <FlatList 
                //horizontal-vertical kaydırma
                horizontal={false}
               //scrollbarı kaldırma
                showsHorizontalScrollIndicator={false}
                data={books} 
                renderItem={
                ({item})=>{
                    return( <TouchableOpacity onPress={()=>{
                        props.navigation.navigate('BookDetail',{book:item})
                    }}>
                                <Text style={styles.textStyle} key={item.id}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                }}
            keyExtractor={(book)=>book.title}
            />
        </View>
    )
}


const styles=StyleSheet.create({
    textStyle:{
        marginVertical:15,
        paddingVertical:50,
        paddingHorizontal:25,
        color:"#aaa",
        backgroundColor:'#ededed',
        fontSize:16,
        
    }
});

export default withNavigation(BookList);