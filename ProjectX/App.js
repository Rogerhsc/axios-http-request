/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './src/Styles/stylesPrincipal';
import ListaItens from './src/Components/ListaItens';


export default class App extends Component {

  //First 
  constructor(props) {
    super(props);
    console.log('Construindo a aplicação');
  }

  //Antes de Renderizar
  componentWillMount() {

  }

  //Depois de renderizar
  componentDidMount() {

  }
  render() {
    return (
      <View style={styles.container}>
        <ListaItens>
        </ListaItens>
      </View>
    );
  }
}

