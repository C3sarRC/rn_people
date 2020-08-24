import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AboutScreen from 'components/about/AboutScreen';
import Header from 'components/common/Header';
import {ROUTE} from 'utils/constants';

const Stack = createStackNavigator();

function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
        header: (props) => <Header {...props} />,
      }}>
      <Stack.Screen
        name={ROUTE.ABOUT}
        component={AboutScreen}
        options={{
          headerTitle: 'About',
        }}
      />
    </Stack.Navigator>
  );
}

export default AboutStack;
