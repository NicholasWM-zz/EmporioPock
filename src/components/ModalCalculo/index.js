import React, {useState, useEffect} from 'react'
import {
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    View,
    Modal,
} from 'react-native';
import styles from './Style'

import plus from '../../assets/icons/plus/plus_3.png'
import minus from '../../assets/icons/minus/minus_3.png'

export default function ModalSelecaoItems(props) {
    const { visibleModal, setterModal } = props
    const {numAdultos, numCriancas} = props.dados
    const { bebidasSelecionadas, carnesSelecionadas } = props.itemsSelecionados
    const [carnePorAdulto, carnePorCrianca, bebidaPorAdulto, bebidaPorCrianca] = [0.623,0.444,1,0.500]
    
    const calculadoraQuantidade = (consumoPorAdulto, consumoPorCrianca) => Math.round((numAdultos * consumoPorAdulto) + (numCriancas * consumoPorCrianca))
    const calculadoraPreco = (quantidade , preco)=> quantidade * preco


    const [carnes, setCarnes] = useState(carnesSelecionadas)

    const [bebidasCalculo, setBebidasCalculo] = useState([])
    const [carnesCalculo, setCarnesCalculo] = useState([])

    const [precoTotal, setPrecoTotal] = useState(0)

    useEffect(() => 
        {
        console.log("Selecionadas >>>",bebidasSelecionadas, '\n\n\n');
        console.log("BebidasCalculo >>>",bebidasCalculo, '\n\n\n');
        // console.log("Bebidas >>>",bebidas, '\n\n\n');
            
            setBebidasCalculo(bebidasSelecionadas.map(bebidaSelecionada => {
    
            bebidaSelecionada.quantidade = 0
            bebidaSelecionada.precoTotal = 0
            bebidaSelecionada.totalLitros = 0

            return bebidaSelecionada
        }))}, [bebidasSelecionadas])
    useEffect(() => 
        {
        console.log("Selecionadas >>>",bebidasSelecionadas, '\n\n\n');
        console.log("CarnesCalculo >>>",carnesCalculo, '\n\n\n');
        // console.log("Carnes >>>",carnes, '\n\n\n');
            
            setCarnesCalculo(carnesSelecionadas.map(carneSelecionada => {
    
            carneSelecionada.quantidade = 0
            carneSelecionada.precoTotal = 0
            carneSelecionada.totalKgs = 0

            return carneSelecionada
        }))}, [carnesSelecionadas])

    
    return (
        <Modal
            animationType='fade'
            transparent={false}
            visible={visibleModal}
            onRequestClose={() => {
                setterModal(false)
            }}>
            <ScrollView>
                <View
                    style={styles.dadosCalculados}>
                    <Text>Total Carne: {calculadoraQuantidade(carnePorAdulto, carnePorCrianca)}kg</Text>
                    <Text>Total Bebida: {calculadoraQuantidade(bebidaPorAdulto, bebidaPorCrianca)} Litros</Text>
                    <Text>Calculo feito para {`${numAdultos}`} adultos e {`${numCriancas}`} crianças</Text>
                </View>
                {bebidasCalculo.length ? bebidasCalculo.map((item, index, array)=>(
                    <View key={item.id} style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin:15}}>
                        <Image source={item.img} style={styles.img}></Image>
                        <View style={{}}>
                                <Text>{`${item.litro_ml}`} ml p/unidade</Text>
                                <Text>{`${item.totalLitros}`} Litros</Text>
                                <Text>Preço: {`${item.preco}`} reais p/ unidade</Text>
                                <Text>Total: {`${item.precoTotal}`} reais</Text>
                                <Text>{`${item.quantidade}`} unidades</Text>
                            </View>
                            <View style={{flexDirection:'column', justifyContent:'space-between'}}>
                                <TouchableOpacity style={{margin:7}}
                                    onPress={()=> {
                                            setBebidasCalculo(array.map((element, ind, a)=> {
                                                if(ind == index){
                                                    element.quantidade += 1
                                                    element.precoTotal = element.quantidade * element.preco
                                                    element.totalLitros = (element.quantidade * element.litro_ml)/1000
                                                }
                                                return element
                                        
                                            }))
                                            setPrecoTotal(bebidasCalculo.reduce((anterior, atual) => anterior + atual.precoTotal,0))
                                        }
                                            
                                    }>
                                    <Image style={{height:30, width:30}} source={plus}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity style={{margin:7}}
                                    onPress={() => {
                                        setBebidasCalculo(array.map((element, ind, a) => {
                                                if (ind == index) {
                                                    element.quantidade = element.quantidade >= 1 ? element.quantidade -= 1 : element.quantidade
                                                    element.precoTotal = element.quantidade * element.preco
                                                    element.totalLitros = (element.quantidade * element.litro_ml) / 1000
                                                }
                                                return element
                                    }))
                                            setPrecoTotal(bebidasCalculo.reduce((anterior, atual) => anterior + atual.precoTotal, 0))}
                                    }>
                                    <Image style={{height:30, width:30}} source={minus}></Image>
                                </TouchableOpacity>

                            </View>

                        </View>
                    ))
                    : <Text>Você não selecionou nenhuma bebida</Text>}
                {carnesCalculo.length ? carnesCalculo.map((item, index, array)=>(
                    <View key={item.id} style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin:15}}>
                        <Image source={item.img} style={styles.img}></Image>
                        <View style={{}}>
                                <Text>{item.preco} {`${item.string_preco}`}</Text>
                                <Text>Total: {`${item.precoTotal}`} reais</Text>
                                <Text>{`${item.quantidade}`} unidades</Text>
                            </View>
                            <View style={{flexDirection:'column', justifyContent:'space-between'}}>
                                <TouchableOpacity style={{margin:7}}
                                    onPress={()=> {
                                            setCarnesCalculo(array.map((element, ind, a)=> {
                                                if(ind == index){
                                                    element.quantidade += 1
                                                    element.precoTotal = element.quantidade * element.preco
                                                    element.totalKgs = (element.quantidade * element.litro_ml)/1000
                                                }
                                                return element
                                        
                                            }))
                                            setPrecoTotal(carnesCalculo.reduce((anterior, atual) => anterior + atual.precoTotal,0))
                                        }
                                            
                                    }>
                                    <Image style={{height:30, width:30}} source={plus}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity style={{margin:7}}
                                    onPress={() => {
                                        setCarnesCalculo(array.map((element, ind, a) => {
                                                if (ind == index) {
                                                    element.quantidade = element.quantidade >= 1 ? element.quantidade -= 1 : element.quantidade
                                                    element.precoTotal = element.quantidade * element.preco
                                                    element.totalKgs = (element.quantidade * element.litro_ml) / 1000
                                                }
                                                return element
                                    }))
                                            setPrecoTotal(carnesCalculo.reduce((anterior, atual) => anterior + atual.precoTotal, 0))}
                                    }>
                                    <Image style={{height:30, width:30}} source={minus}></Image>
                                </TouchableOpacity>

                            </View>

                        </View>
                    ))
                    : <Text>Você não selecionou nenhuma bebida</Text>}
                    <Text>Preço Total: {precoTotal} reais</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        setterModal(!visibleModal);
                    }}>
                    <Text style={styles.buttonText}>Concluir</Text>
                </TouchableOpacity>
            </ScrollView>
        </Modal>
    )
}