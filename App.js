import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Screens from './src/screens';
import Store from './src/redux/store';
import { Provider } from 'react-redux';

export default function App() {
  const imageURL = { uri: "https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755" };
  return (
    <View style={styles.container}>
      {/* <StatusBar style="dark" /> */}
      <Provider store={Store}>
        <ImageBackground
          source={imageURL}
          style={styles.image}
        >
          <Screens />
        </ImageBackground>
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
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    resizeMode: 'cover',
  },
});
