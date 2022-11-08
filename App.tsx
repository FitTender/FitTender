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
import { ScrollView, StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import './App.css';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import paths from './Paths';

export const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const screenOptions: NativeStackNavigationOptions = {
    header(props) {
      const { route } = props;

      if (route.name === 'Login') {
        return <></>;
      }
      return <></>; // custom header 컴포넌트 넣을 위치
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
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
