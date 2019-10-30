import React, {useState, useEffect} from 'react'
import {
    Text,
    TouchableOpacity,
    ScrollView,
    View,
    Modal,
} from 'react-native';
import styles from './Style'
import RenderItemCalculo from './RenderItemCalculo/index'

export default function ModalCalculo(props) {
    const { visibleModal, setterModal } = props
    const {numAdultos, numCriancas} = props.dados
    const { bebidasSelecionadas, carnesSelecionadas } = props.itemsSelecionados
    const [carnePorAdulto, carnePorCrianca, bebidaPorAdulto, bebidaPorCrianca] = [0.623,0.444,1,0.500]
    
    const calculadoraQuantidade = (consumoPorAdulto, consumoPorCrianca) => Math.round((numAdultos * consumoPorAdulto) + (numCriancas * consumoPorCrianca))
    const calculadoraPreco = (quantidade , preco)=> quantidade * preco



    const [bebidasCalculo, setBebidasCalculo] = useState([])
    const [carnesCalculo, setCarnesCalculo] = useState([])

    const [precoTotalCarnes, setPrecoTotalCarnes] = useState(0)
    const [precoTotalBedidas, setPrecoTotalBedidas] = useState(0)
    const [precoTotal, setPrecoTotal] = useState(0)

    useEffect(() => { setPrecoTotal(precoTotalCarnes + precoTotalBedidas)}, [precoTotalCarnes,precoTotalBedidas])

    useEffect(() => 
        {
          setBebidasCalculo(bebidasSelecionadas.map(bebidaSelecionada => {
    
            bebidaSelecionada.quantidade = 0
            bebidaSelecionada.precoTotal = 0
            bebidaSelecionada.totalLitros = 0

            return bebidaSelecionada
        }))}, [bebidasSelecionadas])
    useEffect(() => 
        {
            setCarnesCalculo(carnesSelecionadas.map(carneSelecionada => {
            carneSelecionada.quantidade = 0
            carneSelecionada.precoTotal = 0
            carneSelecionada.totalKgs = 0

            return carneSelecionada
        }))}, [carnesSelecionadas])

    
    return (
        <Modal
            style={{flex:1}}
            animationType='fade'
            transparent={false}
            visible={visibleModal}
            onRequestClose={() => {
                setterModal(false)
            }}>
            <ScrollView 
            style={{flex:0.8}}>
                <View
                    style={styles.dadosCalculados}>
                    <Text>Total Carne: {calculadoraQuantidade(carnePorAdulto, carnePorCrianca)}kg</Text>
                    <Text>Total Bebida: {calculadoraQuantidade(bebidaPorAdulto, bebidaPorCrianca)} Litros</Text>
                    <Text>Calculo feito para {`${numAdultos}`} adultos e {`${numCriancas}`} crianças</Text>
                </View>
                <RenderItemCalculo
                    title="Bebidas"
                    calculo={bebidasCalculo}
                    setCalculo={setBebidasCalculo}
                    setPrecoTotal={setPrecoTotalBedidas} 
                    desc={(item) => {
                        return [
                        `${item.quantidade} unidades`,
                        `Preço: ${item.preco}`,
                        `${item.litro_ml} ml p/unidade`,
                        `${item.totalLitros} Litros`,
                        `Total: ${item.precoTotal} reais`
                        ]
                    }}
                    new_props={
                        {
                            'plus':[
                                {'key': 'quantidade', 'value': (element)=> element.quantidade += 1},
                                { 'key': 'precoTotal', 'value': (element) => element.quantidade * element.preco},
                                { 'key': 'totalLitros', 'value': (element) => element.litro_ml != undefined ? (element.quantidade * element.litro_ml) / 1000 : undefined},
                            ],
                            'minus':[
                                { 'key': 'quantidade', 'value': (element) => element.quantidade > 0 ? element.quantidade -= 1: 0},
                                { 'key': 'precoTotal', 'value': (element) => element.quantidade * element.preco},
                                { 'key': 'totalLitros', 'value': (element) => element.litro_ml != undefined ? (element.quantidade * element.litro_ml) / 1000 : undefined},
                            ]
                        }
                    }
                />
                <RenderItemCalculo
                    title="Carnes"
                    calculo={carnesCalculo}
                    setCalculo={setCarnesCalculo}
                    setPrecoTotal={setPrecoTotalCarnes} 
                    desc={(item) => {
                        return [
                        `${item.quantidade} Kgs`,
                        `${item.preco.toFixed(2)} ${ item.string_preco }`,
                        `Total: ${item.precoTotal.toFixed(2) } reais`,
                        ]
                    }}
                    new_props={
                        {
                            'plus': [
                                { 'key': 'quantidade', 'value': (element) => element.quantidade += 1 },
                                { 'key': 'precoTotal', 'value': (element) => element.quantidade * element.preco },
                            ],
                            'minus': [
                                { 'key': 'quantidade', 'value': (element) => element.quantidade > 0 ? element.quantidade -= 1 : 0 },
                                { 'key': 'precoTotal', 'value': (element) => element.quantidade * element.preco },
                            ]
                        }
                    }
                />
            </ScrollView>
            <View style={{ flex: 0.2 }}> 

                    <Text>Preço Total: {precoTotal.toFixed(2)} reais</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setterModal(!visibleModal);
                        }}>
                        <Text style={styles.buttonText}>Concluir</Text>
                    </TouchableOpacity>
                </View>
        </Modal>
    )
}