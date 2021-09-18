import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import yelp from '../api/yelp';
//import Testing from '../components/Testing';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)  //default state argument indicates not fetched any data becuz: 
    // last time when using results state variable we declare as an [] empty array, as we we're expecting search results array of objects of diff businesses.
    // but this time, we're goin to get just one single object by itself i.e {id object} of 1 particular business.
    const id = navigation.getParam('id');  // here 'id' is the name of the paramater that we want
    /* this is how we're goin to get some information out of that second argument that we called navigate with,
    in the ResultsList -> FlatList inside TouchableOpacity */



    ///////HELPER FUNC///////
    const getResult = async (id) =>
    {
        const response = await yelp.get(`/${id}`); // using template literal for pasting ids over here
        setResult(response.data);
    };

    useEffect(()=>{
        getResult(id); // id that retrieved from our navigation param
    },
    [ ]  
    );

    if(!result){
        return null;
    }
    // it means Do not show anything on the screen until we get some king of result

    return <View style={{ marginBottom: 20 }} >
        <Text>{result.name}</Text>
        <Text> </Text>
        <FlatList
            data={result.photos} //passing an data an array of strings containing photos
            keyExtractor = {(photo) => photo } //photo here is the string, actual URL to fetch to get out image
            renderItem= {( { item } ) => {
                return (
                    // <Image style={styles.image} source={{ uri: item }} />
                        
                    //<Testing result = {item} />
                    <View style={{ marginBottom: 15, borderWidth: 5, borderColor: 'red' }}>
                        <Image style={styles.image} source= {{ uri: item }} />
                    </View>
                );
            }
        }
        
        />
        {/* <Text>Hello</Text> */}
    </View>
};

const styles= StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        //bottom: 10,
        //justifyContent: 'space-between'
    }
});

export default ResultsShowScreen;
