import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>Fitendar - Fit Calendar @2022</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
  },
  Text: {},
});
export default React.memo(Footer);
