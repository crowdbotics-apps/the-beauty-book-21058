import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard15125339Navigator from '../features/Dashboard15125339/navigator';
import SignIn42125337Navigator from '../features/SignIn42125337/navigator';
import BlankScreen0125336Navigator from '../features/BlankScreen0125336/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard15125339: { screen: Dashboard15125339Navigator },
SignIn42125337: { screen: SignIn42125337Navigator },
BlankScreen0125336: { screen: BlankScreen0125336Navigator },

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
