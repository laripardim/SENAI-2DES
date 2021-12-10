import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import style from './style.js';

export default function detalhes ({navigation, route}) {
    const {Nome, Artista, Valor, Descrição, Museu, Imagem } = route.params;
    return (
        <View style={style.cor}>
            <TouchableOpacity style={style.card}>
                <Text style={style.texto}>{Nome}</Text>
                <Text style={style.texto}>{Artista}</Text>
                <Text style={style.texto}>{Valor}</Text>
                <Text style={style.texto}>{Descrição}</Text>
                <Text style={style.texto}>{Museu}</Text>
                <Image source={{uri: Imagem}} style={style.Imagem}/>
            </TouchableOpacity>
        </View>
    )
}