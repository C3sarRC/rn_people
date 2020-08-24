import {StyleSheet} from 'react-native';
import {COLOR_PALETTE, HELPER} from 'utils/styles';
import {baseStyles as textBaseStyles} from 'components/common/Text.styles';

const styleSheet = StyleSheet.create({
  searchBar: {
    padding: HELPER.SPACE * 1.5,
    backgroundColor: COLOR_PALETTE.DARKER_GREY,
  },
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 8,
    position: 'relative',
    backgroundColor: COLOR_PALETTE.WHITE,
  },
  searchIcon: {
    color: COLOR_PALETTE.DARKER_GREY,
    fontSize: 18,
    position: 'absolute',
    top: '30%',
    left: HELPER.SPACE,
  },
  closeIcon: {
    color: COLOR_PALETTE.DARKER_GREY,
    fontSize: 18,
  },
  closeIconBtn: {
    zIndex: 999,
    position: 'absolute',
    top: '30%',
    right: HELPER.SPACE,
  },
  input: {
    minHeight: 35,
    padding: HELPER.SPACE * 0.5,
    backgroundColor: COLOR_PALETTE.TRANSPARENT,
    paddingLeft: HELPER.SPACE * 6,
    paddingRight: HELPER.SPACE * 4,
    ...textBaseStyles.text,
  },
});

export default styleSheet;
