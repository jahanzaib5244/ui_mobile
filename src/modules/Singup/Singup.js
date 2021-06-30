import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView,TextInput } from 'react-native'
import { Singupstyle } from './Singupstyle'


export default function Singup() {
    return (
            <ScrollView>
        <ImageBackground source={require('../../assets/bgImage.png')} style={Singupstyle.bgimg}>
            <View style={Singupstyle.logocontainer}>
                <Image  source={require('../../assets/logo-white.png')} />
            </View>
            <View style={Singupstyle.rootcontainer}>
                <View style={Singupstyle.inputUpperarea}>
                    <View style={Singupstyle.inciortxt}>
                        <Text style={Singupstyle.txt}>Abrir Cuenta</Text>
                    </View>
                    <View style={Singupstyle.inputsarea}>
                        <Text>Email</Text>
                        <TextInput placeholder="Nomber(s)" style={Singupstyle.inputs} />
                        <Text>Contrasena</Text>
                        <TextInput placeholder="Apllido Paterno" style={Singupstyle.inputs} />
                        <Text>Repetir Contrasena </Text>
                        <TextInput placeholder="Apllido Paterno" style={Singupstyle.inputs} />
                    </View>
                   
                </View>

                <View style={Singupstyle.buttonsection}>
                    <TouchableOpacity style={Singupstyle.btn} >
                        <Text style={{ color: 'white', fontSize: 20 }}>Abrir Cuenta</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
        </ScrollView>
    )
}
