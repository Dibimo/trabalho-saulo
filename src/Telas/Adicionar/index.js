import React, { useState } from 'react';
import { StatusBar, Text, View, TextInput, FlatList, TouchableOpacity, Picker, ScrollView, AsyncStorage,  } from 'react-native';
import  Botao  from '../../componentes/Botao';
import  CardNota  from '../../componentes/CardNota';
import Item from './Item'
import estilo from './estilo';
import { useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';


export default function Adicionar({navigation}) {
    // Estados
    
    // const salvar = async() => {
    //     try{
    //         console.log('foi');
    //         await AsyncStorage.setItem('teste', texto);
    //     }catch(err){
    //         alert(err)
    //     }
    // }

    // const load = async () =>{
    //     try {
    //         let textoSalvo = await AsyncStorage.getItem('teste');
    //         setTitulo( textoSalvo)
    //     } catch (err) {
    //         alert(err)
    //     }
    // }

    // useEffect(()=>{
    //     load()
    // },[]);
    // <View>
    //     <TouchableOpacity onPress={salvar}><Text>salvar</Text></TouchableOpacity>
    // </View>

   

    const [texto, setTexto] = React.useState('');
    const [titulo, setTitulo] = React.useState('');
    const [idAtual, setIdAtual] = React.useState(0);
    
    const [categoriaSelecionada, setCategoriaSelecionada] = React.useState('Categoria');    
    // Funções
    const constroiNota = ()=>{
        let tituloNota = titulo;
        let textoNota = String(texto);
        let idNota = idAtual;
        let categoriaNota = categoriaSelecionada;
        if(categoriaNota=="Categoria"){
            categoriaNota = "Geral";
        }
        setIdAtual(prevIdAtual => prevIdAtual + 1);
        return {
            id: idNota, 
            titulo: tituloNota,
            texto: textoNota, 
            categoria: categoriaNota
        }
    };

    // Código "HTML"
    return (
        <View style={estilo.body}>
        <StatusBar />
            <View>
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
                
                <Picker
                    selectedValue={categoriaSelecionada}
                    onValueChange={(itemValue, itemIndex) => setCategoriaSelecionada(itemValue)}
                    // style={estilo.input}
                >
                    <Picker.Item label="Categoria" value="Geral"></Picker.Item>
                    <Picker.Item label="Geral" value="Geral"></Picker.Item>
                    <Picker.Item label="Trabalho" value="Trabalho"></Picker.Item>
                    <Picker.Item label="Estudos" value="Estudos"></Picker.Item>
                    <Picker.Item label="Cotidiano" value="Cotidiano"></Picker.Item>
                    <Picker.Item label="Casa" value="Casa"></Picker.Item>
                    <Picker.Item label="Familia" value="Familia"></Picker.Item>
                </Picker>
            </View>
            <Botao valor="CRIAR NOTA" acao={() => {
                navigation.navigate('Exibir', { novaNota: constroiNota() });
                
            }}></Botao>
        </View>
    );
}
