import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import home from "./home";
import detalhes from './detalhes';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={home}/>
                <Stack.Screen name="detalhes" component={detalhes}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}