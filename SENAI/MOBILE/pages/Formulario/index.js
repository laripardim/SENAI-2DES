import React, { useState } from 'react';
import { Text, View, TextInput, Picker, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';

const top = require('../../assets/top.png')
const mid = require('../../assets/mid.png')
const jg = require('../../assets/jg.png')
const adc = require('../../assets/adc.png')
const sup = require('../../assets/sup.png')
const add = require('../../assets/add-icon.png')

export default function Formulario({ navigation }) {
    const [nomeEquipe, setNomeEquipe] = useState("");
    const [nomeTreinador, setNomeTreinador] = useState("");
    const [nomeJogador, setNomeJogador] = useState("");
    const [posicao, setPosicao] = useState("top");
    const [lista, setLista] = useState({
        top: "",
        mid: "",
        jg: "",
        sup: "",
        adc: ""
    });

    const handleAddJogador = () => {
        setLista({ ...lista, [posicao]: nomeJogador })
    }

    const handleSalvarEquipe = () => {
        let body = {
            "nomeEquipe": nomeEquipe,
            "nomeCoach": nomeTreinador,
            "jogadores": [
                {
                    "posicao":"top",
                    "jogador": lista.top
                },
                {
                    "posicao":"mid",
                    "jogador": lista.mid
                },
                {
                    "posicao":"jg",
                    "jogador": lista.jg
                },
                {
                    "posicao":"adc",
                    "jogador": lista.adc
                },
                {
                    "posicao":"sup",
                    "jogador": lista.sup
                }
            ]
        }

        let url = "http://10.87.202.135:8080/api/equipe";

        fetch(url, {
            method: "POST",
            body: JSON.stringify(body)
        })
        .then(resp => { return resp.status() })
        .then(data => {
            if(data == 200) navigation.navigate("Home");
        })
        .catch(err => {
            console.log(err);
        })

    }

    return (
        <View style={styles.container}>
            <TextInput value={nomeEquipe} onChange={(e) =>  {setNomeEquipe(e.target.value)}} placeholder="Nome da Equipe" style={ styles.inputText }/>
            <View style={ styles.addJogador }>
                <TextInput placeholder="Nome do Jogador" style={ styles.inputText } value={ nomeJogador } onChange={ (e) => { setNomeJogador(e.target.value) } } />
                <Picker selectedValue={ posicao } onChange={ (e) => { setPosicao(e.target.value) } } style={ styles.inputText }>
                    <Picker.Item label="Top" value="top" />
                    <Picker.Item label="Mid" value="mid" />
                    <Picker.Item label="Jungler" value="jg" />
                    <Picker.Item label="ADC" value="adc" />
                    <Picker.Item label="suporte" value="suporte" />
                </Picker>
                <TouchableOpacity onPress={handleAddJogador} style={{marginLeft: 5}}>
                    <Image style={ styles.image} source={add}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.listItem}>
                <Image style={ styles.image} source={top}></Image>
                <Text style={styles.text}> {lista.top} </Text>
            </View>
            <View style={styles.listItem}>
                <Image style={ styles.image} source={mid}></Image>
                <Text style={styles.text}> {lista.mid} </Text> 
            </View>
            <View style={styles.listItem}>
                <Image style={ styles.image} source={jg}></Image>
                <Text style={styles.text}> {lista.jg} </Text>
            </View>
            <View style={styles.listItem}>
                <Image style={ styles.image} source={adc}></Image>
                <Text style={styles.text}> {lista.adc} </Text>
            </View>
            <View style={styles.listItem}>
                <Image style={ styles.image} source={sup}></Image>
                <Text style={styles.text}> {lista.suporte} </Text>
            </View>
            <TextInput value={nomeTreinador} onChange={(({target}) => {setNomeTreinador(target.value) })} style={styles.inputText} placeholder="Nome do treinador"></TextInput>
            <TouchableOpacity style={styles.btn} onPress={handleSalvarEquipe}>
                <Text style={styles.textBtn} >Salvar Equipe</Text>
            </TouchableOpacity>
        </View>
    );
}