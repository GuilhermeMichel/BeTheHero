import React,{ useEffect, useState } from 'react';
import {Feather} from'@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import LogoImg from '../../assets/logo.png';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import styles from './styles';
import api from '../services/api';

export default function Incidents(){
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState();
    const navigation = useNavigation();
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    function navigateToDetail(incident) {
        navigation.navigate('Detail', {incident});
    }

    async function loadIncidents() {
        if (loading) {
            return;
        }

        if(total > 0 && incidents.lenght == total) {
            return;
        }

        setLoading(true);
        const response = await api.get('incidents');

        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);

    }
    useEffect(() => {
        loadIncidents();
    }, []);
    
    console.log(`resultado ${total}`);
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={LogoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> {total} casos </Text>.
                </Text>
            </View>
            <Text style={styles.title}> Bem Vindo!</Text>
            <Text style={styles.description}>Escolha um  dos casos abaixo e salve o dia!</Text>
            <FlatList
            data={incidents}
            style={styles.incidentList}
            keyExtractor={incident => String(incident.id)}
            showsVerticalScrollIndicator={true}
            onEndReached={loadIncidents}
            renderItem={({ item: incident }) => (
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>{incident.name}</Text>

                    <Text style={styles.incidentProperty}>caso:</Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>

                    <Text style={styles.incidentProperty}>valor:</Text>
            <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>

                    <TouchableOpacity 
                        style={styles.detailsButton} 
                        onPress={() => navigateToDetail(incident)}
                    >
                        <Text style={styles.detailsButtonText}>
                            Ver mais detalhes
                        </Text>
                        <Feather name="arrow-right" size={16} color="#e02041" /> 
                    </TouchableOpacity>
                </View>            
            )}
            />              
        </View>
    );
}