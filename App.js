import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screens from './src/screens';
import Store from './src/redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Provider store={Store}>
        <Screens />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
