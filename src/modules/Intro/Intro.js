import React from 'react'
import { ImageBackground,View, Text,Image,TouchableOpacity } from 'react-native'
import {Introstyle} from './IntroStyle';



export default function Intro() {
    return (
        
             <ImageBackground source={require('../../assets/bgImage.png')} style={Introstyle.bgimage}>
            <View style={Introstyle.logocontainer}>
                <Image source={require('../../assets/logo-white.png')}/>
            </View>
            <View style={Introstyle.textcontainer}>
                <Text style={Introstyle.txt}>CROWDFUNDING </Text>
                <Text style={Introstyle.txt}>INMOBILIARIO </Text>
            </View>
            <View style={Introstyle.btncontainer}>
            <TouchableOpacity style={Introstyle.btn} >
                 <Text style={{color:'white',fontSize:20 }}>Iniciar sesion</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity style={Introstyle.btn2} >
                 <Text style={{color:'white',fontSize:20 }}>Crear cuenta</Text>
                    
                </TouchableOpacity>
            </View>
            </ImageBackground>
        
    )
}
