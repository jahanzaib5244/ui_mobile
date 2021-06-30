import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, Image, TextInput } from 'react-native'
import { Singup2style } from './Singup2style'


export default function Singup2() {
    return (

        <ImageBackground source={require('../../assets/bgImage.png')} style={Singup2style.bgimg}>
            <View style={Singup2style.logocontainer}>
                <Image source={require('../../assets/logo-white.png')} />
            </View>
            <View style={Singup2style.rootcontainer}>
                <View style={Singup2style.inputUpperarea}>
                    <View style={Singup2style.inciortxt}>
                        <Text style={Singup2style.txt}>Ingresa tu Nombre</Text>
                        <Image style={{marginTop:30}} source={require('../../assets/kyc1.png')}/>
                    </View>
                    <View style={Singup2style.inputsarea}>
                        <Text>Nomber(s)</Text>
                        <TextInput placeholder="Nomber(s)" style={Singup2style.inputs} />
                        <Text>Apllido Paterno</Text>
                        <TextInput placeholder="Apllido Paterno" style={Singup2style.inputs} />
                        <Text>Apllido Paterno</Text>
                        <TextInput placeholder="Apllido Paterno" style={Singup2style.inputs} />
                    </View>
                    
                </View>
                <Text></Text>
                <View style={Singup2style.buttonsection}>
                    <TouchableOpacity style={Singup2style.btn} >
                        <Text style={{ color: 'white', fontSize: 20 }}>Continuar</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}
