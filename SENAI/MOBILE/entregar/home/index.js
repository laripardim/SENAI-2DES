import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from './style.js';

export default function Home({ navigation, route }) {
    const [entregador, setEntregador] = useState([]);
    useEffect(() => {
        let url = "http://10.87.207.2:3000/entregas/entregadores";

        fetch(url)
            .then(resp => { return resp.json() })
            .then(data => { setEntregador(data); })
    }, []);

    return(
        <View style={style.um}>
            <Text style={style.dois}>Entregador</Text>
            entregador.map((item, index) => {
                <TouchableOpacity style={style.botao} key={index} onPress={()=>{navigation.navigate('detalhes', item)}}>
                    <Text style={style.texto}>{item.Nome}</Text>
                </TouchableOpacity>
            }
        )
        </View>
    );
}