import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import style from './style.js'

export default function home({navigation}) {
    const [lista, setLista] = useState([]);
    
    useEffect(() => {
        let url = "https://pokeapi.co/api/v2/pokemon";

        let data = {
            "lista" : lista,
        }

        fetch(url)
        .then(resp => { return resp.json(); })
        .then(data => {  setLista(data.results); });
    }, []);

    return (
        <View style={style.card}>
            <Text style={style.title}>Escolha Um Pokemón</Text>
            {
                lista.map((item, index) => {
                    return (
                        <TouchableOpacity style={style.btn} key={index} onPress={() => navigation.navigate('detalhes', {id: item.id_pokemon})}>
                            {console.log(item)}
                            <Text style={style.texto}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
}