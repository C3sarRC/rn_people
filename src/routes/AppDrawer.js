import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from 'components/drawer/DrawerContent';
import {ROUTE} from 'utils/constants';
import FeedStack from './FeedStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={ROUTE.FEED_STACK}
        drawerContent={DrawerContent}>
        <Drawer.Screen
          name={ROUTE.FEED_STACK}
          component={FeedStack}
          options={{
            headerTitle: 'Users List',
          }}
        />
        <Drawer.Screen
          name={ROUTE.ABOUT_STACK}
          component={AboutStack}
          options={{headerTitle: 'About'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppDrawer;
