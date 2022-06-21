import React from 'react';
import {View,Text,Image,TouchableOpacity,Linking} from 'react-native';
import Item from './Item';
import ItemSection from './ItemSection';
import Button from './Button';
import uuid from 'react-native-uuid';

const CardDetail=({car})=>{
    const {brand,model}=car;
  
    return(
        <Item style={styles.viewStyle}>
            <ItemSection>
                <View >
                    <Text style={styles.textStyling}>{brand}</Text> 
                </View>
           </ItemSection>
           <ItemSection>
                <View>
                    {model.map(e=> 
                        
                            <View key={uuid.v4()}    >
                                <Text style={styles.textModel}>{e.name}</Text>
                                <Image  source={{uri:e.image}} style={styles.ImageStyle}></Image>
                                <TouchableOpacity onPress={() => Linking.openURL(e.url)}>
                                        <Button />
                                </TouchableOpacity>
                            </View> 
                    )}

                </View>
           </ItemSection>
          

        </Item>
    )
}

const styles={
    textModel:{
        color:'orange',
        textAlign:'center'
    },

    textStyling:{ 
        fontSize:35,
        color:'orange',
        fontFamily:'Open Sans',
        fontStyle:'italic',
        fontWeight:'700',
        letterSpacing:3,
        textAlign:'center',
        textDecorationLine:'underline',
        textShadowColor:'red',
    
    },
    viewStyle:{
        marginBottom:5,
        backgroundColor:'orange',
     
    },
    ImageStyle:{
        width:300,
        height:300,
    }
}
export default CardDetail;