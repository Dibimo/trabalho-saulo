import React from 'react';
import { StatusBar, Text, View, TouchableOpacity } from 'react-native';
import  Botao  from '../../componentes/Botao'
export default function Adicionar() {
    return (
        <View>
        <StatusBar />
            <Text>Isso é um texto de teste</Text>
            <Botao valor="+ Nota" acao={()=>{alert(1)}}></Botao>
        </View>
    );
}
