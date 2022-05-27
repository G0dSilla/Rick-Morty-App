import React from "react";
import {Text, View, TouchableOpacity} from 'react-native'
import Estilos from './styles.js'

const Paginacion = ({prev, next, btnAnterior, btnSiguiente}) => {

    const pagAnterior = () => {
        btnAnterior()
    }

    const pagSiguiente = () => {
        btnSiguiente()
    }

    return(
        <View style={Estilos.cont_botones}>
            {prev ? (
                <TouchableOpacity style={Estilos.botones} title="Atras" onPress={pagAnterior}>
                    <Text style={Estilos.textoBoton}>Atras</Text>
                </TouchableOpacity>
            ):null}
            {next ? (
                <TouchableOpacity style={Estilos.botones} title="Siguiente" onPress={pagSiguiente}>
                    <Text style={Estilos.textoBoton}>Siguiente</Text>
                </TouchableOpacity>
            ):null}
        </View>
    )
}

export default Paginacion