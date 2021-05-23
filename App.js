// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Screens from './src/screens';
import Store from './src/redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const imageURL = {
    uri: "https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=0%2C0%2C891%2C1372"
  };
  const Stack = createStackNavigator();
  return (
    // <View style={styles.container}>
    //   {/* <StatusBar style="dark" /> */}
    //   <Provider store={Store}>
    //     <ImageBackground
    //       source={imageURL}
    //       style={styles.image}
    //     >
    //       <Screens />
    //     </ImageBackground>

    //   </Provider>
    // </View>
    <Provider store={Store}>
      {/* <ImageBackground
        source={imageURL}
        style={styles.image}
      > */}
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="homepage"
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name="homepage" component={Screens} />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </ImageBackground> */}
    </Provider>
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
