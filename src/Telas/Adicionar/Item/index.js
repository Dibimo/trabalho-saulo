import React from "react";

import { useState } from "react";

import { Text, View, TextInput, TouchableOpacity } from "react-native";

export default function Item({texto, acao}) {
  
 

  return (
      <View>
        <TouchableOpacity onPress={acao}><Text>Deletar</Text></TouchableOpacity>
        <Text>{texto}</Text>
      </View>
  );
}
