import React, {memo} from 'react';
import {View} from 'react-native';
import Text, {FONT_VARIANT} from 'components/common/Text';

import styles from './AboutScreen.styles';

const About = () => {
  return (
    <View style={styles.about}>
      <Text fontVariant={FONT_VARIANT.LARGER}>Hello i am C3sar R0driguez</Text>
      <Text fontVariant={FONT_VARIANT.LARGER}>and</Text>
      <Text fontVariant={FONT_VARIANT.LARGER}>this is my RN Test</Text>
    </View>
  );
};

export default memo(About);
