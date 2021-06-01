import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import estilo from './estilo'
export default function CardNota({titulo, texto, categoria, acao}) {
    const [aberto, setAberto] = React.useState(false);
    
    const abreEFecha = ()=>{
        setAberto(!aberto);
    }
    return (
        <>
            <View style={estilo.nota}>
                <View style={{ display: "flex", flexDirection: "row",  }}>
                    
                    <View style={{ marginRight: 15, width: 225,}}>
                        <TouchableOpacity onPress={abreEFecha}>
                            <Text style={{ fontFamily: "flower"}}>{titulo} - {categoria}</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={acao}>
                            <Icon name="trash" size={18} color="#2eadff" />
                        </TouchableOpacity>
                    </View>
                </View>
                {aberto &&
                    (<View>
                    <Text style={{ fontFamily: "flower" }}>{texto}</Text>
                        {/* <TouchableOpacity onPress={acao}>
                            <Text>Deletar</Text>
                        </TouchableOpacity> */}
                    </View>)
                }
            </View>

            <View
                style={{
                    marginTop: 2,
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            ></View>
        </>
    );
}
