import React from 'react'
import {
    Text,
    Image,
    TouchableOpacity,
    View,
} from 'react-native';

import styles from './Style'

const add_icon = require('../../assets/icons/plus/plus_1.png')

export default function SelectItems(props){
    const { name, setter } = props
    return (
        <View style={styles.select} >
            <Text style={styles.selectText}>{name}</Text>
            <TouchableOpacity  
                onPress={() => setter(true)}>
                <Image style={styles.buttonPlus} source={add_icon}></Image>
            </TouchableOpacity>
        </View>
    )
}