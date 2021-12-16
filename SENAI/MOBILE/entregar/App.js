import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home/index.js';
import Entregas from './entregas/index.js';
import Detalhes from './detalhes/index.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Entregas" component={Entregas}/>
        <Stack.Screen name="Detalhes" component={Detalhes}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}