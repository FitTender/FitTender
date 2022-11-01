import * as React from 'react';
import { useCallback } from 'react';
import {
  TouchableOpacityProps,
  TextProps,
  GestureResponderEvent,
  TouchableOpacity,
  Text,
  StyleProp,
} from 'react-native';
import btnStyle from './TextButton.module.scss';

interface TextButtonProps extends TouchableOpacityProps {
  title: string;
  isBorder?: boolean;
  containerClass?: string;
}

const TextButton = ({ onPress, title, containerClass, isBorder = false, ...props }: TextButtonProps) => {
  const _onPress = useCallback((event: GestureResponderEvent) => {
    if (onPress) {
      onPress(event);
    }
  }, []);

  return (
    <TouchableOpacity onPress={_onPress} className={`${isBorder ? btnStyle.containerBorder : ''} ${containerClass}`}>
      <Text className={btnStyle.text} {...props}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(TextButton);
