/**
* @author: Roger Henrique <rogerhenrique.souza@hotmail.com>
* @description estilização para pagina inicial assim como principal
*/

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cfcfcf',
    },
    item: {
        borderWidth: 0.8,
        backgroundColor: '#FFFFFF',
        borderColor: '#999999',
        margin: 10,
        marginTop: 20,
        padding: 15,
        flexDirection: 'row'
    },
    image: {
        width: 102,
        height: 102
    },
    detalhesItem: {
        marginLeft: 20,
        flex: 1,
    },
    txtTitulo: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 5,
    }
});

export default styles;
