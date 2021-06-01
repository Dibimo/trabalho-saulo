
import React from 'react';
import Adicionar from './src/Telas/Adicionar'
import Exibir from './src/Telas/Exibir'
import Rotas from './src/Rotas';  
import { useFonts } from 'expo-font';

export default function App() {
  
  const [carregou] = useFonts({
    flower: require('./assets/fonts/IndieFlower-Regular.ttf'),
  });
  return (
    <Rotas />
  );
}


