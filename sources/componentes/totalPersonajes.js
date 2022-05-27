import react from "react";
import {Text, View, TouchableOpacity} from 'react-native'
import Estilos from './styles.js'

const TotalPersonajes = ({info}) => {
    return(
        <View>
            <Text style={Estilos.totalPersonajesText}>Total de personajes: {info.count}</Text>
        </View>
    )
}

export default TotalPersonajes