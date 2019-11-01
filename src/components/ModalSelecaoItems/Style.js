import {
    StyleSheet,
} from 'react-native';
export default StyleSheet.create({
    titulo: { fontSize: 20, textAlign: 'center', marginTop: 10 },
    selectModal: {
        borderWidth: 1,
        borderColor: "red",
        // flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlignVertical: 'center',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 25,
        alignItems: 'center',
        textAlign: 'center',
    },
    selectModalSelecionado: {
        borderWidth: 1,
        borderColor: "red",
        // flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        textAlignVertical: 'center',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 25,
        marginBottom: 25,
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 12,
    },
    modalImg: {
        borderWidth: 1,
        borderColor: "red",
        height: 300,
        width: 300,
        borderRadius: 20,
        margin: 2,
    },
    modalItemDesc: {
        borderWidth: 1,
        borderColor: "red",
        textAlign: 'center',
        width: 110,
    },
    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#F99608',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    buttonText: {
        color: 'white',
    },  
    lista_items:{
        flex:0.8
    },
    items_selecionados_horizontal:{
        flex: 0.4
    }
})