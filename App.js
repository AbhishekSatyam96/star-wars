import React from 'react';
import { StyleSheet } from 'react-native';
import Screens from './src/screens';
import CharacterDetails from './src/screens/characterDetails';
import Store from './src/redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Star-wars Movie"
        >
          <Stack.Screen name="Star-wars Movie" component={Screens} />
          <Stack.Screen name="Character details" component={CharacterDetails} />
        </Stack.Navigator>
      </NavigationContainer>
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
});
