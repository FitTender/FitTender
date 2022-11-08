/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {Image, StyleSheet, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';


import './App.css';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import paths from './Paths';
import BackTitle from './src/components/common/BackTitle/BackTitle';


export const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const screenOptions: NativeStackNavigationOptions = {};

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Group screenOptions={screenOptions}>
          {paths.map(path => (
            <Stack.Screen key={path.name} {...path} />
          ))}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({});

export default App;
