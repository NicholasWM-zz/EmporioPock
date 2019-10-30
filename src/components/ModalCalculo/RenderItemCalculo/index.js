import React from 'react'
import {
    Text,
    Image,
    TouchableOpacity,
    View,
} from 'react-native';
import styles from '../Style'

import plus_icon_img from '../../../assets/icons/plus/plus_3.png'
import minus_icon_img from '../../../assets/icons/minus/minus_3.png'

export default function RenderItemCalculo(props) {
    const {plus, minus} = props.new_props
    return (
    <>
    <Text>{props.title}</Text>
    {props.calculo.length ? props.calculo.map((item, index, array) => (
            <View  style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 15 }}>
                <Image source={item.img} style={styles.img}></Image>
                <View style={{}}>
                    {props.desc(item).map(i => (<Text>{i}</Text>))}
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ margin: 7 }}
                        onPress={() => {
                            props.setCalculo(array.map((element, ind, a) => {
                                if (ind == index) {                                    
                                    plus.map(new_prop=> {
                                        element[new_prop['key']] = new_prop['value'](element)
                                    })
                                }
                                return element

                            }))
                            props.setPrecoTotal(props.calculo.reduce((anterior, atual) => anterior + atual.precoTotal, 0))
                        }

                        }>
                    <Image style={{ height: 30, width: 30 }} source={plus_icon_img}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 7 }}
                        onPress={() => {
                            props.setCalculo(array.map((element, ind, a) => {
                                if (ind == index) {
                                    minus.map(new_prop => {
                                        element[new_prop['key']] = new_prop['value'](element)
                                    })
                                }
                                return element
                            }))
                            props.setPrecoTotal(props.calculo.reduce((anterior, atual) => anterior + atual.precoTotal, 0))
                        }
                        }>
                    <Image style={{ height: 30, width: 30 }} source={minus_icon_img}></Image>
                    </TouchableOpacity>

                </View>

            </View>
        ))
        : <Text>Você não selecionou nenhuma Carne</Text>}
        </>
)}