import React from "react";
import {Text, View, Button,Image,Alert} from 'react-native'
import Estilos from './styles.js'
import repo from './personajes.js'

const PersonajeRandom = ({personajes}) => {
    

    var personajeAleatorio = []
    personajeAleatorio = personajes[Math.floor(Math.random() * personajes.length)]

    return(
      <View style={Estilos.cont_random}>
        <Text style={Estilos.tituloRandom}>Personaje aleatorio</Text>
                <View style={Estilos.carta_personaje}>
                    <Image
                    source={{uri: personajeAleatorio.image}}

                    style={Estilos.imagenCarta}
                    />
                    <View style={Estilos.infoCarta}>
                        <Text style={Estilos.nombreText}>{personajeAleatorio.name}</Text>
                        <Text style={Estilos.descText}>Estado: {personajeAleatorio.status}</Text>
                        <Text style={Estilos.descText}>Especie: {personajeAleatorio.species}</Text>
                        <Text style={Estilos.descText}>Genero: {personajeAleatorio.gender}</Text>
                    </View>
                </View>
    
      </View>
    )
  }

export default PersonajeRandom

