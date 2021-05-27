import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import estilo from './estilo';
export default function Botao({ valor, acao }) {
    return (
        <View style={estilo.conteiner}>
            <TouchableOpacity onPress={acao} >
                <Text style={estilo.botao}>{valor}</Text>
            </TouchableOpacity>
        </View>
    );
}
