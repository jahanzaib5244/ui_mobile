import React from 'react'
import { View, Text, Image, TextInput, Button, TouchableHighlight } from 'react-native'
import { logindark } from './LoginDark_Style';

export default function LoginDark() {
    return (
        <View style={logindark.container}>
            <View style={logindark.container1}>
                <Image source={require('../../assets/logo-white.png')} />
            </View>
            <View style={logindark.container2}>
                <TextInput style={logindark.input} placeholderTextColor='#FFFFFF' placeholder='User Name' />
                <TextInput style={logindark.input} placeholderTextColor='#FFFFFF' placeholder='User Password' />
                <Text style={logindark.Text}>Forget Password.?</Text>
            </View>
            <View style={logindark.container03}>
                <TouchableHighlight style={logindark.btn} >
                 <Text style={{color:'white',fontSize:20 }}>LogIn</Text>
                    
                </TouchableHighlight>
            </View>

        </View>
    )
}
