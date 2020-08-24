import React, {memo, useRef, useState} from 'react';
import {View, Animated} from 'react-native';
import Text, {FONT_COLOR} from './Text';
import ToastContext from 'contexts/ToastContext';

import styles from './Toast.styles';

const ANIMATION_DURATION = 500;
const SCREEN_TIME = 3000;
const TOAST_TYPE = {
  INFO: 'INFO',
  ERROR: 'ERROR',
};

const INITIAL_STATE = {
  type: null,
  message: null,
};

function mapStateAndPropsToStyles(type) {
  const componentStyles = [styles.toast];
  if (type === TOAST_TYPE.ERROR) {
    componentStyles.push(styles.error);
  }
  if (type === TOAST_TYPE.INFO) {
    componentStyles.push(styles.info);
  }

  return componentStyles;
}

function pipeStateAndProps(type) {
  const componentProps = {fontColor: FONT_COLOR.DEFAULT};
  if (type === TOAST_TYPE.ERROR) {
    componentProps.fontColor = FONT_COLOR.RED;
  }
  if (type === TOAST_TYPE.INFO) {
    componentProps.fontColor = FONT_COLOR.BLUE;
  }

  return componentProps;
}

const Toast = ({children}) => {
  const animatedValue = useRef(null);
  const processNextMessageGeneratorRef = useRef(null);

  if (!animatedValue.current) {
    animatedValue.current = new Animated.Value(0);
  }

  if (!processNextMessageGeneratorRef.current) {
    processNextMessageGeneratorRef.current = processNextMessage();
    processNextMessageGeneratorRef.current.next();
  }

  const [{type, message}, setState] = useState(INITIAL_STATE);

  async function* processNextMessage() {
    while (true) {
      const {
        type = TOAST_TYPE.INFO,
        message = '',
        screenTime = SCREEN_TIME,
      } = yield;

      setState({
        type,
        message,
      });
      const isResolved = showToast(screenTime);
      await isResolved;
    }
  }

  function showToast(screenTime) {
    let resolve;

    Animated.timing(animatedValue.current, {
      toValue: 1,
      useNativeDriver: true,
      duration: ANIMATION_DURATION,
    }).start(() => {
      setTimeout(() => {
        hideToast(resolve);
      }, screenTime);
    });

    return new Promise((res) => {
      resolve = res;
    });
  }

  function hideToast(resolveFn) {
    Animated.timing(animatedValue.current, {
      toValue: 0,
      useNativeDriver: true,
      duration: ANIMATION_DURATION,
    }).start(() => {
      setState((prevState) => ({
        ...prevState,
        message: '',
      }));
      resolveFn();
    });
  }

  const translateY = animatedValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  return (
    <ToastContext.Provider value={processNextMessageGeneratorRef.current}>
      <View style={styles.toastContainer}>
        {children}
        <Animated.View
          style={[
            ...mapStateAndPropsToStyles(type),
            {transform: [{translateY}]},
          ]}>
          <Text {...pipeStateAndProps(type)}>{message}</Text>
        </Animated.View>
      </View>
    </ToastContext.Provider>
  );
};

export {TOAST_TYPE};
export default memo(Toast);
