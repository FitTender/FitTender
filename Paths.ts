import * as React from 'react';
import Home from './src/pages/Home/Home';
import Login from './src/pages/Login/Login';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList>;

interface Path {
  name: string;
  component: any;
}

const paths: Path[] = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Login',
    component: Login,
  },
];

export default paths;
