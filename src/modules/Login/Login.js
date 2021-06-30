import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, Image, TextInput } from 'react-native'
import { Loginstyle } from './Loginstyle'


export default function Login() {
    return (

        <ImageBackground source={require('../../assets/bgImage.png')} style={Loginstyle.bgimg}>
            <View style={Loginstyle.logocontainer}>
                <Image source={require('../../assets/logo-white.png')} />
            </View>
            <View style={Loginstyle.rootcontainer}>
                <View style={Loginstyle.inputUpperarea}>
                    <View style={Loginstyle.inciortxt}>
                        <Text style={Loginstyle.txt}>Inicior sesion</Text>
                    </View>
                    <View style={Loginstyle.inputsarea}>
                        <Text>Email</Text>
                        <TextInput placeholder="Email" style={Loginstyle.inputs} />
                        <Text>Contrasena</Text>
                        <TextInput placeholder="Contrasena" style={Loginstyle.inputs} />
                    </View>
                    <Text style={{ alignSelf: 'flex-end', marginRight: '5%' }}>?olvidaste tu Contrasena</Text>
                </View>
                <Text></Text>
                <View style={Loginstyle.buttonsection}>
                    <TouchableOpacity style={Loginstyle.btn} >
                        <Text style={{ color: 'white', fontSize: 20 }}>Inicior sesion</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}
