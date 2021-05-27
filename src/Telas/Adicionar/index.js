import React, { useState } from 'react';
import { StatusBar, Text, View, TextInput, FlatList, TouchableOpacity, Picker, ScrollView  } from 'react-native';
import  Botao  from '../../componentes/Botao';
import  CardNota  from '../../componentes/CardNota';
import Item from './Item'
import estilo from './estilo';
import { useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';


export default function Adicionar({navigation}) {
    // Estados
    
    const [texto, setTexto] = React.useState('');
    const [titulo, setTitulo] = React.useState('');
    const [idAtual, setIdAtual] = React.useState(0);
    
    const [categoriaSelecionada, setCategoriaSelecionada] = React.useState('Geral');
    const [categoriaFiltro, setCategoriaFiltro] = React.useState('');
    
    // Estados -> Vetores
    const [vetorNotas, setVetorNotas] = useState([]);
    
    // Funções
    const constroiNota = ()=>{
        let tituloNota = titulo;
        let textoNota = String(texto);
        let idNota = idAtual;
        let categoriaNota = categoriaSelecionada;
        setIdAtual(prevIdAtual => prevIdAtual + 1);
        return {
            id: idNota, 
            titulo: tituloNota,
            texto: textoNota, 
            categoria: categoriaNota
        }
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

    // Código "HTML"
    return (
        <View>
        <StatusBar />
            <View>
                <TextInput 
                    // style={estilo.input} 
                    multiline={true} 
                    value={titulo}
                    onChangeText={titulo => setTitulo(titulo)}
                    placeholder={'Titulo'}
                />
                <TextInput 
                    // style={estilo.input} 
                    multiline={true} 
                    value={texto}
                    onChangeText={text => setTexto(text)}
                    placeholder={'Conteudo'}
                />
                <Picker
                    selectedValue={categoriaSelecionada}
                    onValueChange={(itemValue, itemIndex)=> setCategoriaSelecionada(itemValue)}
                    // style={estilo.input}
                >
                    <Picker.Item label="Geral" value="Geral"></Picker.Item>
                    <Picker.Item label="Trabalho" value="Trabalho"></Picker.Item>
                    <Picker.Item label="Estudos" value="Estudos"></Picker.Item>
                    <Picker.Item label="Cotidiano" value="Cotidiano"></Picker.Item>
                    <Picker.Item label="Casa" value="Casa"></Picker.Item>
                    <Picker.Item label="Familia" value="Familia"></Picker.Item>
                </Picker>
            </View>
            
            
            
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
            <Botao valor="+ Nota" acao={() => {
                addNota();
                
            }}></Botao>
            
            <Botao valor="Teste" acao={() => {
                navigation.navigate('Exibir', { novaNota: constroiNota() });
                navigation.navigate('Exibir', { vetorNotasNovo: vetorNotas });
                navigation.navigate('Exibir', { teste: texto });
            }}></Botao>

            <FlatList data={vetorNotas.filter(nota => {
                if(categoriaFiltro !==""){ //se houve filtro
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
                            acao={()=>{ removeNota(item.id) }}
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
