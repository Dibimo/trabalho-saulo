import { StyleSheet } from 'react-native';
// import { useFonts } from '@expo-google-fonts/indie-flower';


export default StyleSheet.create({
    
    littleLogoConteiner: {
        display: "flex",
        alignItems: "center",
        marginBottom: -70,
    },
    littleLogo: {
        display: "flex",
        width: 225,
        height: 225,
        
        resizeMode: 'contain'
    },
    body:{
        paddingTop: "3%",
        backgroundColor: "#e7deb7",
        height: "100%"
    },
    input: {
        fontFamily: 'flower',
        margin: 12,
    },
    listaDeNotas:{
        display: "flex",
        alignItems: "center",
    }
});