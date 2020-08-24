import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';

import styles from './UserDetailScreen.styles';

const UserDetailScreen = ({
  route: {
    params: {user = {}},
  },
}) => {
  function getUserFullName(name = {}) {
    return `${name.last}, ${name.first}`;
  }

  function getUsetThumbnailUri(picture = {}) {
    return picture.large || picture.medium;
  }

  function getLocation(location = {}) {
    return `${
      location.street && `${location.street.number} ${location.street.name}`
    }, ${location.city}`;
  }

  return (
    <View style={styles.userDetailScreen}>
      <Image
        source={{uri: getUsetThumbnailUri(user.picture)}}
        style={styles.pic}
      />
      <Text style={styles.text}>{getUserFullName(user.name)}</Text>
      <Text style={styles.text}>{getLocation(user.location)}</Text>
    </View>
  );
};

UserDetailScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
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
        location: PropTypes.shape({
          street: PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired,
          }),
          city: PropTypes.string,
        }),
      }),
    }),
  }),
};

export default UserDetailScreen;
