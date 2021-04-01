/**
 * Homitag Test React Native
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';

const Stack = createStackNavigator();

const StackConfig = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerTitle: null}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerTitle: null}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackConfig />
    </NavigationContainer>
  );
};
export default App;
