import {
    StyleSheet,
} from 'react-native';

import colours from '../../components/patterns/ColourPallet'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: colours.seaGreen,
        color: "white"
    },

    logo: {
        height: 200,
        width: 220,
    },
    logo_mini: {
        height: 110,
        width: 120,
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 15,
    },
    titulo:{
        fontSize: 25,
        color:"white",
        fontWeight: 'bold',
        textAlign:'center',
        marginTop:15
    },  
    input: {
        height: 46,
        alignSelf: 'stretch', //Ocupa toda a largura possivel
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
        marginLeft: 2, 
        marginRight: 2, 
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
    buttonText:{
        color:'white',
    },  

    scrollView:{
        width:'90%',
        borderWidth: 1,
        borderColor: "red",

    },

    border:{
        borderWidth: 1,
        borderColor: "red",
    },
    text:{
        color:"white"
    },
});