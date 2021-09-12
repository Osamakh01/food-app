import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetail = ({ result }) => {
    /* this result prop is going to be essentially my business object. It has all of the diff properties
        that we care about. i.e name, price, image, url etc */ 
    return ( 
        <View style={styles.container}>
            {/* source has 2 curly braces. Outer braces means refering to a JavaScript expression
            Inner braces is forming the actual object that we want to pass to this */}
            {/* uri prop is goin to be where react native tries to get this image form. */}
            <Image style={styles.image} source={{ uri: result.image_url  }} />    
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
};

const styles= StyleSheet.create({
    container:{
        marginLeft: 15,
        //marginBottom: 10, apply this to ResultList.js, becz here the horizontal scrollable list gets more area 
    },  
    image: {
        //by default image wants to collapse itself. to fix this assign fix height or the adjust the height in other way
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
    }
});

export default ResultsDetail;