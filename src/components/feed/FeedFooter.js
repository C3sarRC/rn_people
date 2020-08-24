import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Text, {FONT_VARIANT, FONT_COLOR} from 'components/common/Text';

import styles from './FeedFooter.styles';

const FeedFooter = ({onPressPrev, onPressNext, isFirst, isLast}) => {
  return (
    <View style={styles.feedFooter}>
      <TouchableOpacity
        onPress={onPressPrev}
        style={styles.button}
        disabled={isFirst}>
        {(!isFirst || null) && (
          <Text fontColor={FONT_COLOR.BLUE} fontVariant={FONT_VARIANT.LARGE}>
            <FontAwesomeIcon name="chevron-left" style={styles.icon} />
            <FontAwesomeIcon name="chevron-left" style={styles.icon} /> Prev
          </Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressNext}
        style={styles.button}
        disabled={isLast}>
        {(!isLast || null) && (
          <Text fontColor={FONT_COLOR.BLUE} fontVariant={FONT_VARIANT.LARGE}>
            Next <FontAwesomeIcon name="chevron-right" style={styles.icon} />
            <FontAwesomeIcon name="chevron-right" style={styles.icon} />
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

FeedFooter.propTypes = {
  onPressPrev: PropTypes.func.isRequired,
  onPressNext: PropTypes.func.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
};

const memoiedFeedFooter = memo(FeedFooter);

export default memoiedFeedFooter;
