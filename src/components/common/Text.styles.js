import {StyleSheet} from 'react-native';
import {COLOR_PALETTE} from 'utils/styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const baseStyles = {
  text: {
    fontFamily: 'Roboto Condensed',
    color: COLOR_PALETTE.BLACK,
    fontWeight: '300',
  },
  smaller: {
    fontSize: wp(2.6),
  },
  small: {
    fontSize: wp(3),
  },
  p: {
    fontSize: wp(3.5),
  },
  large: {
    fontSize: wp(4),
  },
  larger: {
    fontSize: wp(4.4),
  },
  blue: {
    color: COLOR_PALETTE.BLUE,
  },
  red: {
    color: COLOR_PALETTE.RED,
  },
  grey: {
    color: COLOR_PALETTE.DARKEST_GREY,
  },
  bold: {
    fontWeight: '400',
  },
  italic: {
    fontStyle: 'italic',
  },
};

const styleSheet = StyleSheet.create(JSON.parse(JSON.stringify(baseStyles)));

export {baseStyles};
export default styleSheet;
