import SettingScreen from '../../screens/SettingScreen';
import CurrencyScreen from '../../screens/CurrencyScreen';

import { createDrawerNavigator, StackNavigator } from 'react-navigation';

const RootStack = createDrawerNavigator(
{
  Home: SettingScreen,
  Details: CurrencyScreen,
},
{
intialRouteName: 'Home',
navigationOptions: {
  headerStyle : {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle : {
    color: 'white',
    },
   },
 }
);

export default StackNavigator({ RootStack : { screen: RootStack } });