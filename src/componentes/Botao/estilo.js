import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    conteiner:{
        // flex:1,
        display: "flex",
        alignItems: "center",
        // height: '25%',
    },
    botao:{
        paddingHorizontal: '24%',
        margin: '3%',
        color: "#fff",
        backgroundColor: "#282a36",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexWrap: 'wrap',
        borderRadius: 5,
    },
    valor: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#fff",
        fontSize: 20
    }
});