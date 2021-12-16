import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import style from './style.js'

export default function detalhes({ navigation, route }) {
    const [pedidos, setPedidos] = useState([]);
    const [carregar, setLoading] = useState(true);
    const {id, nome} = route.params;
    useEffect(() => {
        let url = "http://10.87.207.2:3000/entregas/entregadores/";
        
        fetch(url)
            .then(resp => {return resp.json();})
            .then(data => { 
                setPedidos(data); 
                if(data.length != 0){
                    setCarregar(false);
                }
            })
    }, []);

    return(
        <View style={style.um}>
           <Text style={style.texto}>Não entregues:{nome}</Text>
                <Text style={style.msg}>{nome} já entregou todos os pedidos. Merece aumento :)</Text>
                pedidos.map((item, index) =>
                        <TouchableOpacity style={style.card} key={index} onPress={() => { navigation.navigate("Pedido", item); }}>
                            <Text>{item.endereco}</Text>
                        </TouchableOpacity>
                )
        </View>
    )
}