import React from 'react';
import {
    Image,
    View
} from 'react-native';
import styles from './Style' 
const logo = require('../../assets/Logo_3.png')

export default function Loading() {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
    </View>
    );
};