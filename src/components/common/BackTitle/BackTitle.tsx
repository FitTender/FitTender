import * as React from 'react';
import { useCallback } from 'react';
import { TouchableOpacity , TouchableOpacityProps, Image} from 'react-native';

const BackIcon = require('../../../img/BackIcon.png')

interface BackTitleProps extends TouchableOpacityProps {}

const BackTitle = ({onPress, ...props}: BackTitleProps) => {

    const _onPress = useCallback((event) => {
        // router

        if (onPress) {
            onPress(event);
        }
    }, []);

    return (
        <TouchableOpacity onPress={_onPress} { ...props}>
            <Image source={BackIcon} style={{ width: 12, height: 12 }} />
        </TouchableOpacity>
    )
};

export default React.memo(BackTitle);

