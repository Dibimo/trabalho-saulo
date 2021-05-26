import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import estilo from './estilo'
export default function CardNota({titulo, texto, categoria, acao}) {
    const [aberto, setAberto] = React.useState(false);
    
    const abreEFecha = ()=>{
        setAberto(prevAberto=> !prevAberto);
    }
    return (
        <View style={estilo.nota}>
            <TouchableOpacity onPress={abreEFecha}><Text>{titulo} - {categoria}</Text></TouchableOpacity>
            {aberto &&
                <View>
                    <View>{texto}</View>
                    <TouchableOpacity onPress={acao}>
                        <Text>Deletar</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>        
    );
}
