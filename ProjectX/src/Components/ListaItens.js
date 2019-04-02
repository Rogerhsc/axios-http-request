/**
* @author: Roger Henrique <rogerhenrique.souza@hotmail.com>
* @description componente que lista itens de api
*/
import React, { Component } from 'react';
import {
    ScrollView,
} from 'react-native';
import Itens from './Itens';
import axios from 'axios';

export default class ListaItens extends Component {

    constructor(props) {
        super(props);
        this.state = { listaItens: [] }
    }

    componentWillMount() {
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then(response => { this.setState({ listaItens: response.data }); })
            .catch(() => { console.log('Erro ao Recuperar os Dados'); });
    }

    render() {
        return (
            <ScrollView>
                {this.state.listaItens.map((item) => { return (<Itens key={item.titulo} item={item}>{item.titulo}</Itens>) })}
            </ScrollView>
        );
    }
}

