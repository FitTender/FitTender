import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {Props} from '../../../Paths';

interface HomeProps extends Props {}

const Home = ({navigation}: HomeProps) => {
  return (
    <View>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Login')}
      />
      <Text>Home</Text>
    </View>
  );
};

export default React.memo(Home);
