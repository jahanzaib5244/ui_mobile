import React from 'react'
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginDark from './src/modules/LoginDark/LoginDark';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Intro from './src/modules/Intro/Intro';
import Singup from './src/modules/Singup/Singup';
import Login from './src/modules/Login/Login';
import Singup2 from './src/modules/Singup2/Singup2';
import Dashboard from './src/modules/Dashboard/Dashboard';
import Navigation from './src/Navigation/Navigation';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();






export default function App() {
  return (
    <NavigationContainer>
      <Navigation/>
      

    </NavigationContainer>
  )
}
