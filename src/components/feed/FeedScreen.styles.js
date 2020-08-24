import {StyleSheet} from 'react-native';
import {COLOR_PALETTE, HELPER} from 'utils/styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styleSheet = StyleSheet.create({
  feedScreen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLOR_PALETTE.WHITE,
  },
  retryContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  retryButton: {
    padding: HELPER.SPACE * 2,
    alignItems: 'center',
  },
  retryText: {
    marginBottom: HELPER.SPACE,
  },
  retryIcon: {
    fontSize: wp(4),
  },
});

export default styleSheet;
