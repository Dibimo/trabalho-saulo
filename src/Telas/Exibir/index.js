import React, { useState } from 'react';
import { StatusBar, Text, View, TextInput, FlatList, TouchableOpacity, Picker, ScrollView } from 'react-native';
import Botao from '../../componentes/Botao';
import CardNota from '../../componentes/CardNota';
import estilo from './estilo'
import { useEffect } from 'react';

export default function Exibir({ route }) {

    
    useEffect(()=>{
        addNota();
    },[route.params.novaNota]);
    
    const { novaNota } = route.params;
    
    const [categoriaFiltro, setCategoriaFiltro] = React.useState('');
    const [vetorNotas, setVetorNotas] = useState([]);
    const addNota = () => {
        if (Object.keys(novaNota).length !== 0) {
            var novoArrayNotas = [...vetorNotas, novaNota];
            console.log(novoArrayNotas);
            setVetorNotas(novoArrayNotas);
        }
    };

    const removeNota = notaId => {
        setVetorNotas(vetorNotas => {
            return vetorNotas.filter(nota => nota.id !== notaId);
        });
    };
    return (
        <View>
            
            <Picker
                selectedValue={categoriaFiltro}
                onValueChange={(itemValue, itemIndex) => {
                    setCategoriaFiltro(itemValue);
                }}
            // style={estilo.input}
            >
                <Picker.Item label="-" value=""></Picker.Item>
                <Picker.Item label="Geral" value="Geral"></Picker.Item>
                <Picker.Item label="Trabalho" value="Trabalho"></Picker.Item>
                <Picker.Item label="Estudos" value="Estudos"></Picker.Item>
                <Picker.Item label="Cotidiano" value="Cotidiano"></Picker.Item>
                <Picker.Item label="Casa" value="Casa"></Picker.Item>
                <Picker.Item label="Familia" value="Familia"></Picker.Item>
            </Picker>
            <FlatList data={vetorNotas.filter(nota => {
                if (categoriaFiltro !== "") { //se houve filtro
                    return nota.categoria == categoriaFiltro; //retorna apenas as notas que tenham o filtro correspondente
                }
                return nota; //se não tiver filtro, retorna todas as notas
            })}
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
