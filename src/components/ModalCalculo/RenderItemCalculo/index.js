import React from 'react'
import {
    Text,
    Image,
    TouchableOpacity,
    View,
} from 'react-native';
import styles from '../Style'

import plus from '../../../assets/icons/plus/plus_3.png'
import minus from '../../../assets/icons/minus/minus_3.png'

export default function RenderItemCalculo(props) {

return (
    <>
    {props.calculo.length ? props.calculo.map((item, index, array) => (
            <View key={item.id} style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 15 }}>
                <Image source={item.img} style={styles.img}></Image>
                <View style={{}}>
                    {props.desc(item).map(i => (<Text>{i}</Text>))}
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ margin: 7 }}
                        onPress={() => {
                            props.setCalculo(array.map((element, ind, a) => {
                                if (ind == index) {
                                    element.quantidade += 1
                                    element.precoTotal = element.quantidade * element.preco
                                    element.totalLitros = element.litro_ml!= undefined?(element.quantidade * element.litro_ml) / 1000:undefined
                                }
                                return element

                            }))
                            props.setPrecoTotal(props.calculo.reduce((anterior, atual) => anterior + atual.precoTotal, 0))
                        }

                        }>
                        <Image style={{ height: 30, width: 30 }} source={plus}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 7 }}
                        onPress={() => {
                            props.setCalculo(array.map((element, ind, a) => {
                                if (ind == index) {
                                    element.quantidade = element.quantidade >= 1 ? element.quantidade -= 1 : element.quantidade
                                    element.precoTotal = element.quantidade * element.preco
                                    element.totalLitros = element.litro_ml != undefined ? (element.quantidade * element.litro_ml) / 1000 : undefined
                                }
                                return element
                            }))
                            props.setPrecoTotal(props.calculo.reduce((anterior, atual) => anterior + atual.precoTotal, 0))
                        }
                        }>
                        <Image style={{ height: 30, width: 30 }} source={minus}></Image>
                    </TouchableOpacity>

                </View>

            </View>
        ))
        : <Text>Você não selecionou nenhuma Carne</Text>}
        </>
)}