import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial194855Navigator from '../features/Tutorial194855/navigator';
import NotificationList194827Navigator from '../features/NotificationList194827/navigator';
import Settings194826Navigator from '../features/Settings194826/navigator';
import Settings194818Navigator from '../features/Settings194818/navigator';
import UserProfile194816Navigator from '../features/UserProfile194816/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial194855: { screen: Tutorial194855Navigator },
NotificationList194827: { screen: NotificationList194827Navigator },
Settings194826: { screen: Settings194826Navigator },
Settings194818: { screen: Settings194818Navigator },
UserProfile194816: { screen: UserProfile194816Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
