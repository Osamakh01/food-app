import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    /*** PART 1 ***/
    /* CUT AND PASTE WHOLE BUSSINESS RELATED LOGIC OR LOGIC RELATED TO YELP API, INTO THE NEWLY CREATED 
     HOOKS FOLDER, useResults.js */

    const [results, setResults] = useState([]);
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
                    location: 'california', //harcoding location
                }
            });

            /*essentially we're goin to wait for some response to come back once this thing is resolve with some
            actual data, we will assign the result to the response variable 
            response variable that we get back from an Axios request is goin to have a .data property on it
            */

            setResults(response.data.businesses);
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

     /*** PART 2 ***/
    /* NOW RETURNING THE THINGS THAT WE NEED INSIDE OF OUR COMPONENT, INSIDE OF AN ARRAY */
     return [searchApi, results, errorMessage];
};