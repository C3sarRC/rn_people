import {StyleSheet} from 'react-native';
import {COLOR_PALETTE, HELPER} from 'utils/styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styleSheet = StyleSheet.create({
  userDetailScreen: {
    flex: 1,
    paddingTop: wp(20),
    alignItems: 'center',
    backgroundColor: COLOR_PALETTE.WHITE,
  },
  pic: {
    width: wp(30),
    height: wp(30),
    borderRadius: HELPER.BORDER_RADIUS,
    marginBottom: HELPER.SPACE * 4,
  },
  text: {
    marginBottom: HELPER.SPACE * 2,
    fontSize: wp(4),
  },
});

export default styleSheet;
