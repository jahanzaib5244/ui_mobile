import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import Singup from '../modules/Singup/Singup';
import Login from '../modules/Login/Login';
import Intro from '../modules/Intro/Intro';
import Dashboard from '../modules/Dashboard/Dashboard';


const Stack = createStackNavigator();
export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Intro" component={Intro} options={{headerShown:null}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown:null}}/>
            <Stack.Screen name="Singup" component={Singup} options={{headerShown:null}}/>
            <Stack.Screen name="Home" component={Dashboard} />

        </Stack.Navigator>
       
    )
}
