import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerLeft from './src/components/drawer/Drawer';
import AppNavigator from './src/components/AppNavigator';

export default function App() {
  return (
      <NavigationContainer>
        <DrawerLeft />
      </NavigationContainer>
  );
}
