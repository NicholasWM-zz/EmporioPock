import React, {
    useState,
    useEffect
} from 'react'
import {
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView, 
    SafeAreaView,
} from 'react-native';

import {bebidas, carnes} from '../../../database/bd'

import ScrollHorizontal from '../../components/ScrollHorizontal/index'
import SelectItems from '../../components/SelectItems/index'
import ModalSelecaoItems from '../../components/ModalSelecaoItems/index'
import ModalCalculo from '../../components/ModalCalculo/index'

import styles from './Style'
const logo = require('../../assets/Logo_3.png')

export default function Loading() {
    const [bebidasModal, setBebidasModal] = useState(false)
    const [bebidasSelecionadas, setBebidasSelecionadas] = useState([])

    const [carnesModal, setCarnesModal] = useState(false)
    const [carnesSelecionadas, setCarnesSelecionadas] = useState([])
    
    const [calculoModal, setCalculoModal] = useState(false)

    const [numCriancas, setNumeroCriancas] = useState(0)
    const [numAdultos, setNumeroAdultos] = useState(0)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Image style={styles.logo_mini} source={logo}></Image>
                <Text style={styles.titulo}>Calculo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Quantidade de Adultos"
                    onChangeText={(num) => setNumeroAdultos(num)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Quantidade de Crianças"
                    onChangeText={(num) => setNumeroCriancas(num)}
                />

                <SelectItems
                    setter={setBebidasModal}
                    name="Bebidas"
                ></SelectItems>
                
                <ScrollHorizontal
                    selecaoItems={bebidasSelecionadas}
                    setter={setBebidasSelecionadas}
                ></ScrollHorizontal>

                <SelectItems
                    setter={setCarnesModal}
                    name="Carnes"
                ></SelectItems>

                <ScrollHorizontal
                    selecaoItems={carnesSelecionadas}
                    setter={setCarnesSelecionadas}
                ></ScrollHorizontal>


                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>setCalculoModal(true)}
                     >
                    <Text style={styles.buttonText}>Calcular</Text>
                </TouchableOpacity>

            </ScrollView>

            <ModalSelecaoItems
                selecaoItems={bebidasSelecionadas}
                setterItems={setBebidasSelecionadas}
                visibleModal={bebidasModal}
                setterModal={setBebidasModal}
                nome="Bebidas"
                listaItemsDisponiveis={bebidas}
                stringPreco="reais">
            </ModalSelecaoItems>

            <ModalSelecaoItems
                selecaoItems={carnesSelecionadas}
                setterItems={setCarnesSelecionadas}
                visibleModal={carnesModal}
                setterModal={setCarnesModal}
                listaItemsDisponiveis={carnes}
                stringPreco="reais p/kg">
            </ModalSelecaoItems>

            <ModalCalculo
                itemsSelecionados={{ bebidasSelecionadas, carnesSelecionadas }}
                dados={{numCriancas, numAdultos}}
                visibleModal={calculoModal}
                setterModal={setCalculoModal}
            ></ModalCalculo>
        </SafeAreaView>
    )
}
