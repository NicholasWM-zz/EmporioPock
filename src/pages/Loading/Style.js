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
        backgroundColor: colours.darkGoldenRod,
    },
    logo: {
        alignSelf:'center',
        height: 300,
        width: 320,
    },
    border: {
        borderWidth: 1,
        borderColor: "red",
    }
});