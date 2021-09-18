import React, { useState } from 'react';
/* useEffect is a hook or a func that allow us to run some snippet of code just one time 
when our component is first rendered onto the screen */ 
import { View, Text, StyleSheet, ScrollView, EdgeInsetsPropType } from 'react-native';
import SearchBar from '../components/SearchBar';
/*** PART 3 ***/ import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
// WHENEVER WE WANT TO UPDATE CONTENT ON THE SCREEN, WE'RE ALWAYS TAKING ABOUT STATES.

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    // making state varible for the results that we get from yelp api

    const [searchApi, results, errorMessage] = useResults();



    /* CUT AND PASTE WHOLE BUSSINESS RELATED LOGIC OR LOGIC RELATED TO YELP API, INTO THE NEWLY CREATED 
     HOOKS FOLDER, useResults.js */
    /****** REMEMBER WHENEVER WE ARE EXTRACT SOME AMOUNT OF HOOK RELATED LOGIC INTO A SECOND FILE, 
     WE ARE TECHNICALLY CREATING OUR OWN CUSTOM HOOK *****/ 


    
    /*const [results, setResults] = useState('');
    // initializing with an empty array cz we're expecting results to eventually
    // have a big array of objects that contains all the diff results we got back from yelp API
    const [errorMessage, setErrorMessage] = useState('');
    // if we want to detect when an error occurs and update whats on the screen or shows an error msg
    // to the user, it means we need to add in a new state variable


    // helper func
    const searchApi = async (searchTerm) => {
        console.log('hello ')
        // thats how we're going to access our yelp API
        // we're specifically making a get type HTTP request and we want to access the /search route
        // this /search route will be concatenated with the baseURL inside of our yelp.js file

        // whenever we make a API request or any kind of network request, its an ASYNCHRONOUS operation.
        // so we have to add a promise to handle the search results that we get back
        try{
            const response = await yelp.get('/search', {
                // if we pass in a params property to the 2nd argument of a axios call, any key value pairs we put
                // inside of here, will be automatically appended onto our request URL
                params: {
                    limit: 50, //this will make axios request:- '/search?limit=50'. QUERY STRING= ?limit=50
                    term: searchTerm, //or     term: term   since key and value are identical using ES2015 syntax
                    //                  (parameter):(our piece of state)
                    // our piece of state is term and the parameter that we want to provide to the yelp API
                    // is also called term as well
                    location: 'san jose', //harcoding location
                }
            });

            /*essentially we're goin to wait for some response to come back once this thing is resolve with some
            actual data, we will assign the result to the response variable 
            response variable that we get back from an Axios request is goin to have a .data property on it
            */

    /*        setResults(response.data.businesses);
            // this .data property wil be the actual JSON data tht we got back from that API 
            // in other words, response.data will be the whole big object inside yelp documentation
            // but we care about only businesses
            // thats the array of object that we want to store
        } catch (err){
            setErrorMessage('Something went wrong')
        }
        
    };


    //!!!BAD_CODE!!!
    //CALL SEARCH API WHEN COMPONENT IS FISRT RENDERED
    //searchApi('pasta');

    useEffect (() => { 
            searchApi('pasta');
     }, [ ] ); 
     */
    

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        
        return results.filter(result => {
            return result.price === price;
            // for every result inside of our results array, we will ask ourselves if the result price is 
            // equal to the price we just passed in as argument
            // if this return is true, we're going to return that inside of a new result set from this func
            
        });
        
    };


      /* flex:1 so that the whole VIEW would not expand, only fillup to the space available on the screen
    return <View style={{ flex:1 }}> */
    return (
        /* emptyElements: <> </>
        we've got something like placeholder element, we dont have to worry about adding flex:1 property 
        in general, we like to make use of this placeholder anytime we need to return multiple diff 
        elements whenever using a <View> would actually kind of harm our layout overall.*/

        /* by default react-native is going to use here is to not allow any of this content to off the Edge 
        of the screen. This allow us to return a bunch of diff elements, but this does not actually
        render an element on the screen.  */

        <>  
            <SearchBar
                term={term}
                //onTermChange={(newTerm) => setTerm(newTerm)}
                //onTermSubmit={() => searchApi()}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
                // we just want to pass a reference to the func that should be invoked 
            />
            {/* passing term State variable to the child (SearchBar) thru the prop named: term
            onTermChange is a callback func. when it gets called it will call setTerm and i will recieve
            an argument with the new value named: newTerm and i'll use that to update our current piece of state. */}

            {errorMessage ? <Text>{errorMessage}</Text> : null} 
            {/* so that it wouldnt take place on the screen and gets only visible when theres an actual error */}
            {/* <Text>We have found {results.length} results</Text> */}


            <ScrollView>
                {/* results is a prop, its going to be the array of data that we want this component (ResultsList) to 
                show and its value is going to come from filterResultsByPrice */}
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
            </ScrollView>
                {/* if ScrollView detects that it has too much content inside of it to fit on the screen at one time,
                it will automatically enable scrolling our user can scroll thru that content */}
        </>    
    );

};

const styles = StyleSheet.create({});

export default SearchScreen;