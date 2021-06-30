import {StyleSheet} from 'react-native';

export const Introstyle = StyleSheet.create({
  
    logocontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textcontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    txt:{
        fontSize:25,
        color:'white',
        fontWeight:'bold'
    },
    btncontainer:{
        flex:1,
        justifyContent:'flex-end',
        
    },
    bgimage:{ 
        flex:1,
        resizeMode: "cover",
    justifyContent: "center",
      
    },
    btn:{
        marginLeft:'5%',
        marginBottom:4,
        marginRight:'5%',
        borderRadius:50,
        height:50,
        backgroundColor:"#227BFF",
        alignItems:'center',
        justifyContent:'center'
    },
    btn2:{
        marginLeft:'5%',
        marginBottom:'10%',
        marginRight:'5%',
        borderRadius:50,
        height:50,
        backgroundColor:"#0C1327",
        alignItems:'center',
        justifyContent:'center'
    }
})