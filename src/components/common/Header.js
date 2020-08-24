import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Animated} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Text, {FONT_COLOR, FONT_VARIANT, FONT_STYLE} from './Text';

import styles from './Header.styles';

const Header = ({scene, navigation, previous}) => {
  const {options: currentSceneOptions} = scene.descriptor;
  let prevSceneOptions;
  if (previous && previous.descriptor) {
    prevSceneOptions = previous.descriptor.options;
  }
  function handlePressDrawerButton() {
    navigation.openDrawer();
  }

  const progress = Animated.add(
    scene.progress.current,
    scene.progress.next || 0,
  );

  const opacity = progress.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return (
    <Animated.View style={{opacity}}>
      <View style={styles.header}>
        <View style={[styles.partial, styles.left]}>
          {(previous || null) && (
            <TouchableOpacity onPress={navigation.goBack}>
              <Text
                fontColor={FONT_COLOR.BLUE}
                fontVariant={FONT_VARIANT.LARGE}>
                <FontAwesomeIcon name="chevron-left" style={styles.backIcon} />{' '}
                {prevSceneOptions.headerTitle}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.partial}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Text fontVariant={FONT_VARIANT.LARGER} fontStyle={FONT_STYLE.BOLD}>
              {currentSceneOptions.headerTitle}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.partial, styles.right]}>
          <TouchableOpacity onPress={handlePressDrawerButton}>
            <FontAwesomeIcon style={styles.drawerIcon} name="bars" />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

Header.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};

export default Header;
