import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FeedScreen from 'components/feed/FeedScreen';
import UserDetailScreen from 'components/userDetail/UserDetailScreen';
import Header from 'components/common/Header';
import {ROUTE} from 'utils/constants';

const Stack = createStackNavigator();

function FeedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
        header: (props) => <Header {...props} />,
      }}>
      <Stack.Screen
        name={ROUTE.FEED}
        component={FeedScreen}
        options={{headerTitle: 'User List'}}
      />
      <Stack.Screen
        name={ROUTE.USER_DETAIL}
        component={UserDetailScreen}
        options={{headerTitle: 'User Detail'}}
      />
    </Stack.Navigator>
  );
}

export default FeedStack;
