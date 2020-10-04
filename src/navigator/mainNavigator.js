import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn48125346Navigator from '../features/SignIn48125346/navigator';
import NotificationList7125343Navigator from '../features/NotificationList7125343/navigator';
import UserProfile9125341Navigator from '../features/UserProfile9125341/navigator';
import Dashboard15125339Navigator from '../features/Dashboard15125339/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn48125346: { screen: SignIn48125346Navigator },
NotificationList7125343: { screen: NotificationList7125343Navigator },
UserProfile9125341: { screen: UserProfile9125341Navigator },
Dashboard15125339: { screen: Dashboard15125339Navigator },

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
