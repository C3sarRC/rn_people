import {StyleSheet} from 'react-native';
import {COLOR_PALETTE} from 'utils/styles';
import {Platform} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styleSheet = StyleSheet.create({
  feedFooter: {
    height: Platform.OS === 'ios' ? 100 : 50,
    flexDirection: 'row',
    backgroundColor: COLOR_PALETTE.GREY,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLOR_PALETTE.BLUE,
    fontSize: wp(4),
  },
  icon: {
    fontSize: wp(3),
    color: COLOR_PALETTE.BLUE,
  },
});

export default styleSheet;
