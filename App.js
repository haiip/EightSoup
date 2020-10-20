import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/SearchScreen';
import { App as Testcomp } from './src/HomeScreen';


const AppNavigator = createStackNavigator(
  {
 Search: SearchScreen,
 Home: Testcomp,
}, 
{
initialRouteName: 'Home',
defaultNavigationOptions: {
title: 'Eight Soups',

headerStyle: {
  backgroundColor:'#4caf50'
},
headerTintColor:'#fff',
headerTitleStyle:{
  fontWeight: 'bold',
},
headerTitleAlign:'center'




}
}
);

export default createAppContainer(AppNavigator);