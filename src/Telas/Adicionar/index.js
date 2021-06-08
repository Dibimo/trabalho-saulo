import React, { useState } from 'react';
import { StatusBar, Text, View, TextInput, FlatList, TouchableOpacity, Picker, Image, AsyncStorage,  } from 'react-native';
import  Botao  from '../../componentes/Botao';
import estilo from './estilo';
import { useFonts } from 'expo-font';
import CardNota from '../../componentes/CardNota';
import * as Font from 'expo-font';
import { useEffect } from 'react';


export default function Adicionar({navigation}) {

    const carregarFonte = async () => {
        try {
            await Font.loadAsync({
                flower: require('../../../assets/fonts/IndieFlower-Regular.ttf'),
            });
        } catch (err) {
            return;
        }

        setEstiloInput({
            fontFamily: "flower",
            margin: 12,
        });
    }

    
    const [estiloInput, setEstiloInput] = useState({});
    

    useEffect(() => { carregarFonte() }, [])
    
    
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

    var logo = require('../../../assets/LittleNotesLogo.png');
    // Código "HTML"
    return (
        <View style={estilo.body}>
        <View style={estilo.littleLogoConteiner} >
            <Image style={estilo.littleLogo} source={logo} />
        </View>
        <StatusBar />
            <View>
                <View>
                    <View>
                    </View>
                    <TextInput 
                        style={estiloInput}
                        multiline={true} 
                        value={titulo}
                        onChangeText={titulo => setTitulo(titulo)}
                        placeholder={'Titulo'}
                    />
                    <TextInput 
                        style={estiloInput} 
                        multiline={true} 
                        value={texto}
                        onChangeText={text => setTexto(text)}
                        placeholder={'Conteudo'}
                    />
                </View>
                
                <Picker
                    selectedValue={categoriaSelecionada}
                    onValueChange={(itemValue, itemIndex) => setCategoriaSelecionada(itemValue)}
                    style={estiloInput}
                >
                    <Picker.Item label="Categoria" value="Categoria"></Picker.Item>
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
