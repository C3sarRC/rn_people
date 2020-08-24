import {StyleSheet} from 'react-native';
import {COLOR_PALETTE, HELPER} from 'utils/styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styleSheet = StyleSheet.create({
  feedItem: {
    padding: HELPER.SPACE,
    borderBottomColor: COLOR_PALETTE.GREY,
    borderBottomWidth: 1,
    backgroundColor: COLOR_PALETTE.WHITE,
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
  },
  nextIcon: {
    position: 'absolute',
    right: HELPER.SPACE,
    top: '45%',
    fontSize: wp(3.5),
  },
  left: {
    marginRight: HELPER.SPACE,
  },
  right: {
    flex: 9,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  thumbnail: {
    width: wp(10),
    height: wp(10),
    borderRadius: HELPER.BORDER_RADIUS,
    resizeMode: 'cover',
  },
});

export default styleSheet;
