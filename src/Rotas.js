import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Adicionar from './Telas/Adicionar/index';
import Exibir from   './Telas/Exibir/index';



const Tab = createBottomTabNavigator();
export const coresBarraNav = {
    azul: '#00b7ff',
    fundo: '#fff',
    escuro: '#555555',
    inativo: '#c5c5c5',
};

export default function Rotas() {
    
    return(
        
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: coresBarraNav.azul,
                    inactiveTintColor: coresBarraNav.inativo,
                    activeBackgroundColor: coresBarraNav.azul,
                    inactiveBackgroundColor: coresBarraNav.fundo,
                    style: {
                        height: 70,
                    },
                    labelStyle: {
                        width: '100%',
                        flex: 1,
                        
                        fontSize: 12,
                        lineHeight: 21,
                        marginTop: 3,
                        paddingTop: 21,
                        backgroundColor: coresBarraNav.fundo
                    },
                    keyboardHidesTabBar: true,
                }}>
                <Tab.Screen name="Adicionar" component={Adicionar} />
                <Tab.Screen name="Exibir" component={Exibir} initialParams={{novaNota: {}}} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
