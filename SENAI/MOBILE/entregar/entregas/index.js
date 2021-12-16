import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from './style.js';

export default function entregas({ navigation, route }) {   
    const {id, cliente, endereco, pedido, valor} = route.params;
    var valor = valor; 
    const entregar = () => {
        let url = "http://10.87.207.2:3000/entregas/entregues/";
        
        fetch(url, { method: "PUT"} )
            .then(resp => { 
                if(resp.status == 200){
                    navigation.navigate("Home");   
                }
        })
    }

    return(
        <View style={style.um}>
            <Text>ID:{id}</Text>
            <Text>Cliente:{cliente}</Text>
            <Text>Entregar no endereço:{endereco}</Text>
            <Text>Produto:{pedido}</Text>
            <Text>Valor a pagar:{valor}</Text>
            <TouchableOpacity style={style.botao} onPress={entregar}>
                <Text style={style.texto}>Foi entregue o pedido</Text>
            </TouchableOpacity>
        </View>
    )
}