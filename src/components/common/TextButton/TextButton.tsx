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
  textStyle?: StyleProp<TextProps>;
}

const TextButton = ({ onPress, title, textStyle, ...props }: TextButtonProps) => {
  const _onPress = useCallback((event: GestureResponderEvent) => {
    if (onPress) {
      onPress(event);
    }
  }, []);

  return (
    <TouchableOpacity onPress={_onPress} {...props}>
      <Text className={btnStyle.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(TextButton);
