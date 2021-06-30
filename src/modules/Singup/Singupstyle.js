import {StyleSheet} from 'react-native';

export const Singupstyle= StyleSheet.create({
    bgimg:{
       flex:1,
       resizeMode: "cover",
       justifyContent: "center",
    },
    logocontainer:{
        flex:0.7,
        justifyContent:'center',
        alignItems:'center'
    },
    rootcontainer:{
       flex:3,
       backgroundColor:'#FFFFFF',
       borderTopLeftRadius:50,
       borderTopRightRadius:50,
    },
    inputUpperarea:{
        flex:1,
        

    },
    buttonsection:{
        flex:0.9,
        justifyContent:'flex-end'  
    },
    inciortxt:{
       flex:1,
       alignItems:'center',
    },
    txt:{
       
       fontSize:24,
       fontWeight:'bold',
       marginTop:20,
    },
    inputsarea:{
        flex:2.3,
        margin:'5%',
    },
    inputs:{
      height:50,
      borderWidth:0.5,
      marginTop:5,
      padding:10,
      marginBottom:20

    },
    btn:{
        margin:'5%',
        borderRadius:50,
        height:50,
        backgroundColor:"#227BFF",
        justifyContent:'center',
        alignItems:'center',
    
    },

})