import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title,results }) => {
    return <View style={styles.container} >
        <Text style= {styles.title}>{title}</Text>
            <FlatList  
            horizontal //shortform of: horizontal={true}, when we are writing TRUE inside curly braces
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={result => result.id}
            // a func that is goin to called with every RESULT inside of results array
                                        // and it returns a string that is not going to change b/w re-renders
            renderItem= {({ item }) => {
                // we'll pass the ITEM, that we're currently iterating over 
                return <ResultsDetail result={item} />
            }}
        /> 

        {/* <Text>result: {results.length}</Text> */}
    </View>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    container: {
        marginBottom: 10,
    }
});

export default ResultsList;