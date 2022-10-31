import * as React from 'react';
import {useCallback} from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  Text,
  GestureResponderEvent,
} from 'react-native';
import {Props} from '../../../../Paths';

const BackIcon = require('../../../img/BackIcon.png');

interface BackTitleProps extends TouchableOpacityProps, Props {
  title?: string;
}

const BackTitle = ({onPress, title, navigation, ...props}: BackTitleProps) => {
  const _onPress = useCallback(
    (event: GestureResponderEvent) => {
      // router
      if (onPress) {
        onPress(event);
      } else {
        navigation.goBack();
      }
    },
    [navigation],
  );

  return (
    <TouchableOpacity onPress={_onPress}>
      <Image source={BackIcon} style={{width: 12, height: 12}} />
      {title && <Text>{title}</Text>}
    </TouchableOpacity>
  );
};

export default React.memo(BackTitle);
