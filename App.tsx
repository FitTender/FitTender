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
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

import './App.css';
import BackTitle from './src/components/common/BackTitle/BackTitle';
import TextButton from './src/components/common/TextButton/TextButton';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TextButton title={'hello'} />
        <BackTitle />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
