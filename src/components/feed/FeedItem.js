import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {COLOR_PALETTE} from 'utils/styles';
import Text, {
  FONT_VARIANT,
  FONT_STYLE,
  FONT_COLOR,
} from 'components/common/Text';

import styles from './FeedItem.styles';

const FeedItem = ({user, onPress}) => {
  function getUserFullName(name = {}) {
    return `${name.last}, ${name.first}`;
  }

  function handlePress() {
    onPress(user);
  }

  return (
    <TouchableOpacity style={styles.feedItem} onPress={handlePress}>
      <View style={styles.left}>
        <Image
          source={{uri: user.picture && user.picture.thumbnail}}
          style={styles.thumbnail}
        />
      </View>
      <View style={styles.right}>
        <Text fontStyle={FONT_STYLE.BOLD}>{getUserFullName(user.name)}</Text>
        <Text
          fontVariant={FONT_VARIANT.SMALL}
          fontColor={FONT_COLOR.GREY}
          style={styles.phone}>
          {user.phone}
        </Text>
        <FontAwesomeIcon
          style={styles.nextIcon}
          name="chevron-right"
          regular
          color={COLOR_PALETTE.DARKER_GREY}
        />
      </View>
    </TouchableOpacity>
  );
};

FeedItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }),
    phone: PropTypes.string,
    email: PropTypes.string,
    picture: PropTypes.shape({
      large: PropTypes.string,
      medium: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
  }),
  onPress: PropTypes.func.isRequired,
};

export default FeedItem;
