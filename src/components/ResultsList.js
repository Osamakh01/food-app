import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
/*its a func from navigation thats goin to wrap our component and return a new version of the component
that will have the navigation prop automatically added in
react Navigation Stack Navigator --> navigation --> ResultsList*/
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
    if(!results.length){
        return null;
    }

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
                // we'll pass the ITEM, that we're currently iterating over,
                // This ITEM is our actual Business object now.
                return ( 
                    <TouchableOpacity onPress={()=> navigation.navigate('ResultsShow', { id: item.id })}>
                            {/* our 2nd argument here is goin to be an object thats goin to be some information 
                            that we're goin to communicate over to that other screen */}
                            {/* So now when our ResultsShow component is displayed, it will have this extra
                            little piece of information, which is the ID of the business. */}
                    <ResultsDetail result={item} />
                    </TouchableOpacity>
                );
            }}
        /> 

        {/* <Text>result: {results.length}</Text> */}
    </View>
};
// in order to detect tap event we can make use of TOUCHABLE OPACITY (Primitive RN element)

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

export default withNavigation(ResultsList);
/* we're no longer exporting ResultsList directly.
instead we're exporting a special version of ResultsList that has that extra code/functionality tied to it,
thats going to give ResultsList access to navigation.*/ 