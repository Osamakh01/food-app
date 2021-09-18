import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';



//creating a new variable navigator and assigning it the result of createStackNavigator
//1st argument to this is going to be an object thats goin to list out all the diff routes that our project has 
//has right now.
const navigator = createStackNavigator(
    {
        Search: SearchScreen,
        ResultsShow: ResultsShowScreen,

    }, 
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {     //this is default option for every screen of the project, either its 
                                        //header Title or etc.
        title: 'Business Search'
        }
    }
);

export default createAppContainer(navigator);
// createAppContainer func essentially creates a default app component/react component and displays whatever
// content navigator is producing inside of that component
// in another words createAppContainer just makes sure we actually exports a component from this file.
