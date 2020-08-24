import {StyleSheet, Platform} from 'react-native';
import {COLOR_PALETTE, HELPER} from 'utils/styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styleSheet = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? HELPER.SPACE * 5 : HELPER.SPACE * 1.5,
    flexDirection: 'row',
    padding: HELPER.SPACE,
    paddingBottom: HELPER.SPACE * 1.5,
    backgroundColor: COLOR_PALETTE.GREY,
  },
  partial: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  drawerIcon: {
    color: COLOR_PALETTE.BLUE,
    fontSize: wp(4),
    marginHorizontal: HELPER.SPACE * 2,
  },
  backIcon: {
    color: COLOR_PALETTE.BLUE,
    fontSize: wp(4),
    display: 'flex',
  },
  backIconContainer: {
    marginRight: HELPER.SPACE,
  },
});

export default styleSheet;
