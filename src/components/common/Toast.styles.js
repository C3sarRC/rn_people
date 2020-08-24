import {StyleSheet} from 'react-native';
import {COLOR_PALETTE, HELPER} from 'utils/styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const baseStyles = {
  toastContainer: {
    flex: 1,
  },
  toast: {
    position: 'absolute',
    top: -50,
    left: 0,
    marginHorizontal: HELPER.SPACE,
    width: wp(100) - HELPER.SPACE * 2,
    padding: HELPER.SPACE * 2,
    borderRadius: HELPER.BORDER_RADIUS,
  },
  info: {
    backgroundColor: COLOR_PALETTE.LIGHTER_BLUE,
  },
  error: {
    backgroundColor: COLOR_PALETTE.LIGHTER_RED,
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
  grey: {
    color: COLOR_PALETTE.DARKER_GREY,
  },
  bold: {
    fontWeight: '600',
  },
  italic: {
    fontStyle: 'italic',
  },
};

const styleSheet = StyleSheet.create(JSON.parse(JSON.stringify(baseStyles)));

export {baseStyles};
export default styleSheet;
