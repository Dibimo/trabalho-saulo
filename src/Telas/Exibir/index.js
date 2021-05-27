import React, { useState } from 'react';
import { StatusBar, Text, View, TextInput, FlatList, TouchableOpacity, Picker, ScrollView } from 'react-native';
import Botao from '../../componentes/Botao';
import CardNota from '../../componentes/CardNota';
import estilo from './estilo'

export default function Exibir({ route, navigation }) {
    
    const { vetorNotas } = route.params;

    // Código "HTML"
    return (
        <View>
            <FlatList data={vetorNotas}
                renderItem={({ item }) => (
                    <TouchableOpacity style={estilo.listaDeNotas}>
                        {/* <Text onPress={() => { removeNota(item.id) }}>Deletar</Text> */}
                        {/* <Item {...item} acao={() => { removeNota(item.id) }} /> */}
                        <CardNota
                            titulo={item.titulo}
                            texto={item.texto}
                            categoria={item.categoria}
                            acao={() => { removeNota(item.id) }}
                        >
                        </CardNota>
                    </TouchableOpacity>
                )
                }
                keyExtractor={({ id }) => String(id)}

            />
        </View>
    );
}
