import axios from 'axios';

// we cant use axios directly to make a network request
// alternatively we can make an instance of it tht has some preset options assigned
// thats how we are gonna resuse some amount of code
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    // this property is going to be essentially the route URL that we want to make the request to

    // in order to authorize ourselves with the yelp API, we have to pass in a request header
    headers: {
        // in this object, we'll put name of our header
        Authorization: 'Bearer xg3ctXNmb6LQRGlaVm6DK0QcgrX4TYtHaLSn58269TLET_ek6JqXhlArHCswGdVieXJchOi4itQpc5DXkYW_qNkTzCoosTIEcBadZ3O9HvQbQ3rVj1GCNQvyrLgnYXYx'

    }

});

/* if we ever to make a request to either that search route (https://api.yelp.com/v3/businesses/search) or
some particular bussiness ID (https://api.yelp.com/v3/businesses/{id}) we would just call our yelp instance, 
which we're goin to import into some other file, then we'll do a get request :

yelp.get('/search') // this is just saves us to write entire URL (https://api.yelp.com/v3/businesses/search)
*/
 

/* SO NOW IN ANY COMPONENT THAT NEEDS TO ACCESS THE YELP API, WE CAN IMPORT THIS FILE AND IMMEDIATELY 
ACCESS THE YELP API WITHOUT HAVING TO REDESIGNATE THE BASIC URL OR ANY AUTHORIZATION HEADER */