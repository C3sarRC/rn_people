import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Text as RNText, TextPropTypes} from 'react-native';

import styles from './Text.styles';

const FONT_VARIANT = {
  DEFAULT: 'DEFAULT',
  SMALL: 'SMALL',
  LARGE: 'LARGE',
  LARGER: 'LARGER',
};

const FONT_STYLE = {
  ITALIC: 'ITALIC',
  BOLD: 'BOLD',
  DEFAULT: 'DEFAULT',
};

const FONT_COLOR = {
  DEFAULT: 'DEFAULT',
  GREY: 'GREY',
  BLUE: 'BLUE',
  RED: 'RED',
};

function mapStateAndPropsToStyles({
  style: customStyle,
  fontVariant,
  fontColor,
  fontStyle,
}) {
  const componentStyles = [styles.text];
  if (customStyle) {
    if (Array.isArray(customStyle)) {
      componentStyles.push(...customStyle);
    } else {
      componentStyles.push(customStyle);
    }
  }
  if (fontVariant === FONT_VARIANT.SMALL) {
    componentStyles.push(styles.small);
  }
  if (fontVariant === FONT_VARIANT.LARGE) {
    componentStyles.push(styles.large);
  }
  if (fontVariant === FONT_VARIANT.LARGER) {
    componentStyles.push(styles.larger);
  }
  if (fontColor === FONT_COLOR.BLUE) {
    componentStyles.push(styles.blue);
  }
  if (fontColor === FONT_COLOR.RED) {
    componentStyles.push(styles.red);
  }
  if (fontColor === FONT_COLOR.GREY) {
    componentStyles.push(styles.grey);
  }
  if (fontStyle === FONT_STYLE.ITALIC) {
    componentStyles.push(styles.italic);
  }
  if (fontStyle === FONT_STYLE.BOLD) {
    componentStyles.push(styles.bold);
  }

  return componentStyles;
}

const Text = ({
  children,
  style: customStyle,
  fontVariant,
  fontColor,
  fontStyle,
  ...rest
}) => {
  const style = mapStateAndPropsToStyles({
    style: customStyle,
    fontVariant,
    fontColor,
    fontStyle,
  });
  return (
    <RNText {...rest} style={style}>
      {children}
    </RNText>
  );
};

Text.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.object),
  ]),
  fontVariant: PropTypes.oneOf(Object.keys(FONT_VARIANT)),
  fontColor: PropTypes.oneOf(Object.keys(FONT_COLOR)),
  fontStyle: PropTypes.oneOf(Object.keys(FONT_STYLE)),
  ...TextPropTypes,
};

Text.defaultProps = {
  fontColor: FONT_COLOR.DEFAULT,
  fontVariant: FONT_VARIANT.DEFAULT,
  fontStyle: FONT_VARIANT.DEFAULT,
};

export {FONT_COLOR, FONT_STYLE, FONT_VARIANT};
export default memo(Text);
