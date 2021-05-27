import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Adicionar from './Telas/Adicionar/index';
import Exibir from   './Telas/Exibir/index';


const Tab = createBottomTabNavigator();

export default function Rotas() {
    return(
        
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Adicionar" component={Adicionar} />
                <Tab.Screen name="Exibir" component={Exibir} initialParams={{novaNota: {}}} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
