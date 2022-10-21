import React, { useCallback } from 'react';
import { TouchableOpacityProps, TextProps, GestureResponderEvent, TouchableOpacity, Text, StyleProp } from 'react-native';

interface TextButtonProps extends TouchableOpacityProps {
    title: string;
    textStyle?: StyleProp<TextProps>
}

const TextButton = ({onPress, title,textStyle, ...props}: TextButtonProps) => {

    const _onPress = useCallback((event: GestureResponderEvent) => {
        if (onPress) {
            onPress(event);
        }
    }, []);

    return (
        <TouchableOpacity onPress={_onPress} {...props}>
        <Text style={textStyle}>
          {title}
        </Text>
      </TouchableOpacity>
    )

};



export default React.memo(TextButton);