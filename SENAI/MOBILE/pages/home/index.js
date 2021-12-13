import React, { useEffect, useState } from 'react';
import { Text, View, Image, Button } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-web';
import styles from './Styles';

export default function Home({ navigation }) {
    const [equipes, setEquipes] = useState([]);

    useEffect(() => {
        let url = "http://10.87.202.135:8080/api/equipe";

        fetch(url)
            .then(resp => { return resp.json() })
            .then(data => { setEquipes(data) });
    }, []);
    // const logo = require('../../assets/logo.png');

    // const handleNavigate = () => {
    //     navigation.navigate('Formulario');
    // };

    return (
        <View style={styles.container}>
            <Button title="Cadastrar Nova Equipe" onPress={() => { navigation.navigate("Formulario") }} />
            <ScrollView>
                {
                    equipes.map((item, index) => {
                        return (
                            <TouchableOpacity style={styles.equipe} key={index} onPress={() => { navigation.navigate("Equipe", { id: item.id }) }}>
                                <Text>{item.nomeEquipe}</Text>
                                <Text>{item.nomeCoach}</Text>
                            </TouchableOpacity>
    )
})
            }
            </ScrollView >

{/* <Image style={styles.image} source={logo} />
            <Image style={styles.image} source={{ uri: 'https://www.imagensbomdia.net/wp-content/uploads/2019/05/Bom-Dia-mensagens-para-WhatsApp-908.jpg' }} />
            <Text style={styles.texto}>Olá, Mundo!</Text>
            <Button onPress={handleNavigate} title="Ir ao Formulário" /> */}
        </View >
    );
}