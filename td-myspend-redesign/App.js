import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppRegistry } from 'react-native';
import AppNavigator from './app/navigation/AppNavigator';
import Theme from './app/constants/Theme';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor={Theme.colors.primary} />
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent('td-myspend-redesign', () => App);

export default App; 