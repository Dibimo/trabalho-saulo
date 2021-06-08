import React, { useState } from 'react';
import { StatusBar, Text, View, TextInput, FlatList, TouchableOpacity, Picker, ScrollView, AsyncStorage } from 'react-native';
import Botao from '../../componentes/Botao';
import CardNota from '../../componentes/CardNota';
import estilo from './estilo'
import { useEffect } from 'react';

export default function Exibir({ route }) {


    const salvar = async(vetorAtual, texto) => {
        let notasAtuais = vetorAtual;
        try{
            // await AsyncStorage.setItem('notas', '');
            await AsyncStorage.setItem('notas', JSON.stringify(notasAtuais));
            
        }catch(err){
            alert("Salvar error: "+err);
        }
    }

    const load = async () =>{
        try {
            let notasAntigas = await AsyncStorage.getItem('notas');
            if(notasAntigas != null){
                setVetorNotas(JSON.parse(notasAntigas))
            }
        } catch (err) {
            alert("Load error: "+err);
            
        }
    }

    useEffect(()=>{
        load();
    },[])
    
    useEffect(()=>{ //quando recebe uma nova nota
        addNota();
    },[route.params.novaNota]);
    
    const { novaNota } = route.params;
    
    const [categoriaFiltro, setCategoriaFiltro] = React.useState('');
    const [vetorNotas, setVetorNotas] = useState([]);

    const addNota = () => {
        if (Object.keys(novaNota).length !== 0) {
            var novoArrayNotas = [...vetorNotas, novaNota];
            setVetorNotas(novoArrayNotas);
            salvar(novoArrayNotas);
        }
    };

    const removeNota = notaId => {
        
        let novoVetorNotas = vetorNotas.filter(nota=>nota.id !==notaId);
        // setVetorNotas(vetorNotas => {
        //     return vetorNotas.filter(nota => nota.id !== notaId);
        // });
        
        setVetorNotas(novoVetorNotas);
        
        
        // let vetorSemNotaExcluida = vetorNotas;
        salvar(novoVetorNotas,'removerNota');
    };
    
    return (
        <View style={estilo.bodyExibir}>
            
            <Picker
                selectedValue={categoriaFiltro}
                onValueChange={(itemValue, itemIndex) => {
                    setCategoriaFiltro(itemValue);
                }}
                style={{marginTop: 10, marginBottom: 10}}
            // style={estilo.input}
            >
                <Picker.Item label="Filtro" value=""></Picker.Item>
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
                keyExtractor={({ id }) => String(Math.random()*(100000-1)+1)}

            />
        </View>
    );
}
