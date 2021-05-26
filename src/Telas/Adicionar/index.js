import React, { useState } from 'react';
import { StatusBar, Text, View, TextInput, FlatList, TouchableOpacity  } from 'react-native';
import  Botao  from '../../componentes/Botao';
import  CardNota  from '../../componentes/CardNota';
import Item from './Item'
import estilo from './estilo';
export default function Adicionar() {
    const [texto, setTexto] = React.useState('');
    const [titulo, setTitulo] = React.useState('');
    const [idAtual, setIdAtual] = React.useState(1);
    
    const [vetorNotas, setVetorNotas] = useState([]);
    const constroiNota = ()=>{
        let textoNota = String(texto);
        let idNota = idAtual;
        setIdAtual(prevIdAtual => prevIdAtual + 1);
        return {id: idNota, texto: textoNota}
    }
    const addNota = () =>{
        var novoArrayNotas = [...vetorNotas, constroiNota()];
        setVetorNotas(novoArrayNotas);
    };
    const removeNota = notaId => {
        setVetorNotas(vetorNotas => {
            return vetorNotas.filter(nota => nota.id !== notaId);
        });
    };
    return (
        <View>
        <StatusBar />
            <View>
                <TextInput 
                style={estilo.input} 
                multiline={true} 
                value={titulo}
                onChangeText={titulo => setTitulo(titulo)}
                placeholder={'Titulo'}
                />
                <TextInput 
                style={estilo.input} 
                multiline={true} 
                value={texto}
                onChangeText={text => setTexto(text)}
                placeholder={'Conteudo'}
                />
            </View>
            <View>
                <Botao valor="+ Nota" acao={()=>{
                    addNota();
                }}></Botao>
            </View>
            <FlatList data={vetorNotas}
                renderItem={({ item }) => (
                    <TouchableOpacity >
                        {/* <Text onPress={() => { removeNota(item.id) }}>Deletar</Text> */}
                        {/* <Item {...item} acao={() => { removeNota(item.id) }} /> */}
                        <CardNota titulo={titulo} texto={texto} acao={()=>{ removeNota(item.id) }}></CardNota>
                    </TouchableOpacity>
                )

            
            }
                keyExtractor={({ id }) => String(id)}
                
            />
        </View>
    );
}
