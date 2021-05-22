import React from 'react';
import { StatusBar, Text, View, TextInput,   } from 'react-native';
import  Botao  from '../../componentes/Botao'
import estilo from './estilo';
export default function Adicionar() {
    const [texto, setTexto] = React.useState('');
    
    return (
        <View>
        <StatusBar />
            <TextInput 
            style={estilo.input} 
            multiline={true} 
            value={texto}
            onChangeText={text => setTexto(text)}
            />
            <Botao valor="+ Nota" acao={()=>{alert(texto)}}></Botao>
        </View>
    );
}
