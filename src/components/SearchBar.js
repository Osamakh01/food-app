import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return ( 
        <View style = {styles.backgroundStyle}>

            <Feather name='search' style={styles.iconStyle}  />  
            {/* size={40}  thats how we define the size of the icon inside icon library element */}

            <TextInput 
                autoCapitalize= 'none'
                autoCorrect= {false}
                style= {styles.inputStyle} 
                placeholder= 'Search' 
                value= {term}
                //onChangeText= {(newTerm) => onTermChange(newTerm)}
                onChangeText= {onTermChange}    //by not putting on any paranthesis, we're just passing a 
                                                //reference to the func and saying: hey call this func
                                                //at some point in time whenever onChangeText/onEndEditing occurs
                onEndEditing= {onTermSubmit}
                // onEndEditing is our signal tht we want to actually initiate a search to the yelp API 
            />
        
        </View>
    );
};

const styles= StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: 'lightgray',
        height: 50,
        borderRadius: 5, //to get a nice rounded search bar background
        marginHorizontal: 15,   //to get 15px distance from the screen from both left right side
        flexDirection: 'row',
        marginBottom: 10

    },
    inputStyle: {
        flex: 1,    //its goin to tell the element to use up as much space as possible in the flexDirection
        fontSize: 18,   //default size is 14
    },
    iconStyle: {
        fontSize: 35, //thats how we control the size of the icon when we define it inside of a style object
        alignSelf: 'center',    //using alignItems in backgroundStyle would also compress the size
                                //the Search bar typing area. thats why we use alignSelf here so that only the
                                //icon comes in center, not the whole parent <View> that includes searchBar
                                //typing area as well.
        marginHorizontal: 15, //adds space all around the search icon                                 
    }
});

export default SearchBar; 