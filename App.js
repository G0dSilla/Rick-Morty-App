import React, { useState , useEffect} from "react";
import {View,Image} from 'react-native'
import Logo from './sources/img/Rick-And-Morty-Logo.png'
import TotalPersonajes from './sources/componentes/totalPersonajes.js'
import ListadoPersonajes from './sources/componentes/personajes.js'
import PersonajeRandom from "./sources/componentes/randomPersonaje.js";
import Paginacion from "./sources/componentes/paginacion.js"
import Estilos from './sources/componentes/styles.js'


const App = () => {
  const [personajes, setPersonajes] = useState([])
  const [infoApi, setInfoApi] = useState({})
  
  const url = 'https://rickandmortyapi.com/api/character'
  
  const consumirApi = (url) => {
    fetch(url)
      .then(data => data.json())
      .then(data => {
        setPersonajes(data.results);
        setInfoApi(data.info);
      })
  }

  const pagAnterior = () => {
    consumirApi(infoApi.prev)
  }

  const pagSiguiente = () => {
    consumirApi(infoApi.next)
  }


  useEffect(() => {
    consumirApi(url)
  },[])


  return (
    <View style={Estilos.contenedor}>
      <Image 
        style={Estilos.imgLogo}
        source={Logo}/>
      <TotalPersonajes info={infoApi}/>
      <ListadoPersonajes personajes={personajes}/> 
      <Paginacion prev={infoApi.prev} next={infoApi.next} btnAnterior={pagAnterior} btnSiguiente={pagSiguiente}/>
      <PersonajeRandom personajes={personajes}/>
    </View>
  );
};

export default App;
