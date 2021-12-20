import React, { useEffect } from 'react'
import { View, Text} from 'react-native'

export default function detalhes({navigation, route}) {
    const { name, ability} = route.params;

    useEffect(() => {
        let url = 'https://pokeapi.co/api/v2/pokemon/' + name;
        
        fetch(url)
        .then(resp => { return resp.status })
        .then(data => {
            if(data == 200) {
                navigation.navigate("home");
            }
        });
    })

    return (
        <View>
            <View>
                <Text>Nome: {name}</Text>
                <Text>Habilidade: {ability}</Text>
            </View>
        </View>
        //<Text>oi</Text>
    )
}