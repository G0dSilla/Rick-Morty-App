import React from "react";
import {Text, View,Image,FlatList} from 'react-native'
import Estilos from './styles.js'


const ListadoPersonajes = ({personajes}) => {   
    return(
        <FlatList
            style={Estilos.cont_personajes}
            data={personajes}
            renderItem={({ item: repo}) => (
                <View key={repo.id} style={Estilos.carta_personaje}>
                    <Image
                        source={{uri: repo.image}}
                        style={Estilos.imagenCarta}  
                    />
                    <View style={Estilos.infoCarta}>
                        <Text style={Estilos.nombreText}>{repo.name}</Text>
                        <Text style={Estilos.descText}>Estado: {repo.status}</Text>
                        <Text style={Estilos.descText}>Especie: {repo.species}</Text>
                        <Text style={Estilos.descText}>Genero: {repo.gender}</Text>
                    </View>               
                </View>
            )}
        />
    )   
}
export default ListadoPersonajes
 