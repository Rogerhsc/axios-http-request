/**
* @author: Roger Henrique <rogerhenrique.souza@hotmail.com>
* @description Componente itens para o Lista Itens
*/
import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from '../Styles/stylesPrincipal';

export default class Itens extends Component {

    render() {
        return (
            <TouchableOpacity>
                <View style={styles.item}>
                    <View style={styles.image}>
                        <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto }}></Image>
                    </View>
                    <View style={styles.detalhesItem}>
                        <Text style={styles.txtTitulo}>{this.props.item.titulo}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>R$ {this.props.item.valor}</Text>
                        <Text>Loca: {this.props.item.local_anuncio}</Text>
                        <Text>Data Publicação: {this.props.item.data_publicacao}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
};