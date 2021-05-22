import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import estilo from './estilo';
export default function Botao({ valor, acao }) {
    return (
        <View style={estilo.conteiner}>
            <TouchableOpacity onPress={acao} style={estilo.botao}>
                <Text style={estilo.valor}>{valor}</Text>
            </TouchableOpacity>
        </View>
    );
}
