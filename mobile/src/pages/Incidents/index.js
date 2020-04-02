import React from 'react';
import {Feather} from'@expo/vector-icons';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import LogoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={LogoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> 0 casos</Text>
                </Text>
            </View>
            <Text style={styles.title}> Bem Vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia!</Text>

            <View style={styles.incidentList}>
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>TESTE</Text>

                    <Text style={styles.incidentProperty}>caso:</Text>
                    <Text style={styles.incidentValue}>vadela atropelada</Text>

                    <Text style={styles.incidentProperty}>valor:</Text>
                    <Text style={styles.incidentValue}>10,00</Text>

                    <TouchableOpacity 
                        style={styles.detailsButton} 
                        onPress={() => { }}
                    >
                        <Text style={styles.detailsButtonText}>
                            Ver mais detalhes
                        </Text>
                        <Feather name="arrow-right" size={16} color="#e02041" /> 
                    </TouchableOpacity>

                
                </View>

                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>TESTE</Text>

                    <Text style={styles.incidentProperty}>caso:</Text>
                    <Text style={styles.incidentValue}>vadela atropelada</Text>

                    <Text style={styles.incidentProperty}>valor:</Text>
                    <Text style={styles.incidentValue}>10,00</Text>

                    <TouchableOpacity 
                        style={styles.detailsButton} 
                        onPress={() => { }}
                    >
                        <Text style={styles.detailsButtonText}>
                            Ver mais detalhes
                        </Text>
                        <Feather name="arrow-right" size={16} color="#e02041" /> 
                    </TouchableOpacity>

                
                </View>
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>TESTE</Text>

                    <Text style={styles.incidentProperty}>caso:</Text>
                    <Text style={styles.incidentValue}>vadela atropelada</Text>

                    <Text style={styles.incidentProperty}>valor:</Text>
                    <Text style={styles.incidentValue}>10,00</Text>

                    <TouchableOpacity 
                        style={styles.detailsButton} 
                        onPress={() => { }}
                    >
                        <Text style={styles.detailsButtonText}>
                            Ver mais detalhes
                        </Text>
                        <Feather name="arrow-right" size={16} color="#e02041" /> 
                    </TouchableOpacity>

                
                </View>
            </View>
        </View>
    );
}