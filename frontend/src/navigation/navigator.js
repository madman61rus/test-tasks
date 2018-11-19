import {createDrawerNavigator} from 'react-navigation';
import DashboardScreen from '../modules/dashboard/DashboardScreen';

const Navigator = createDrawerNavigator(
  {
    Dashboard: {screen: DashboardScreen}
  },
  {
    initialRouteName: 'Dashboard',
    headerMode: 'none'
  }
);

export default Navigator;
