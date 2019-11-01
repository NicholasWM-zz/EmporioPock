import React from 'react'
import {
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import styles from './Style'
import { removeItemsSelecionados} from '../helpers/helpers'
export default function ScrollHorizontal(props) {
    const {selecaoItems, setter} = props
    return (
        <>
        {selecaoItems.length ?
                <SafeAreaView style={styles.container}>
                    <ScrollView horizontal={true} >
                        {selecaoItems.map(item => (
                            <TouchableOpacity
                                key={item.id}
                                onPress={() => removeItemsSelecionados(selecaoItems, setter, item)}
                            >
                                <Image style={styles.img} source={item.img}></Image>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <Text style={styles.textRemoverItem}>Clique para remover</Text>
                </SafeAreaView> : <Text style={styles.textSelecaoVazia}>Nenhum Item Selecionado!</Text>}
        </>
    )
}