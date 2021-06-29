import React from 'react'
import { View, Text } from 'react-native';
// import LoginDark from './src/modules/LoginDark/LoginDark';
import Intro from './src/modules/Intro/Intro';
export default function App() {
  return (
    <View style={{flex:1 , backgroundColor:'red'}}>
    {/* <LoginDark /> */}
      <Intro />
    </View>
  )
}
