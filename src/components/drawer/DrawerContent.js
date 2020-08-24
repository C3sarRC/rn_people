import React from 'react';
import PropTypes from 'prop-types';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Text, {FONT_COLOR} from 'components/common/Text';
import styles from 'components/common/Text.styles';

const DrawerContent = ({state, descriptors, progress, navigation}) => {
  function findLastRouteInHistoryKey(history = []) {
    const reversedHistory = history.slice().reverse();
    return (
      reversedHistory.find((route) => {
        return route.key;
      }) || {}
    ).key;
  }

  return (
    <DrawerContentScrollView {...{state, descriptors, progress, navigation}}>
      {state.routes.map((route) => {
        const screen = descriptors[route.key];
        const headerTitle =
          (screen.options && screen.options.headerTitle) || '';
        const isFocused = !!(
          findLastRouteInHistoryKey(state.history) === route.key
        );
        return (
          <DrawerItem
            labelStyle={styles.text}
            key={route.key}
            label={({focused}) => {
              return (
                <Text
                  fontColor={focused ? FONT_COLOR.BLUE : FONT_COLOR.DEFAULT}>
                  {headerTitle}
                </Text>
              );
            }}
            focused={isFocused}
            onPress={() => navigation.navigate({key: route.key})}
          />
        );
      })}
    </DrawerContentScrollView>
  );
};

DrawerContent.propTypes = PropTypes.shape({
  navigation: PropTypes.object.isRequired,
  descriptors: PropTypes.object.isRequired,
  progress: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
});

export default DrawerContent;
