import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {Props} from '../../../Paths';

interface LoginProps extends Props {}

const Login = ({navigation}: LoginProps) => {
  return (
    <View>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Text>Login</Text>
    </View>
  );
};

export default React.memo(Login);
