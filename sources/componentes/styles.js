import React from "react";
import {StyleSheet} from 'react-native'

const Estilos = StyleSheet.create({

    //Estilo Contenedor principal
    contenedor: {
        flex:1,
        padding: 10,
        alignItems: "center",
        backgroundColor: "#fff",
        border: "solid 1px",      
    },
    imgLogo: {
        width: '50%',
        height:50,
        marginTop:30,
    },
    titulo:{
        marginTop:30,
        textTransform:'uppercase',
        fontWeight: "800",
        fontSize:30,
        color:'#1A87C1',
    },
    contenidoVista:{
        height:500,
        width:'100%'
    },
    totalPersonajesText:{
        marginTop:10,
        fontSize:30,
        fontWeight: 'bold',
        color: '#00aacc',
    },
    //Estilos Contenedor listado de personajes
    cont_personajes:{
      height: 100,
      width:'100%',
      borderWidth:0,
      paddingTop:10,
      marginTop:10,
      backgroundColor:"#fff",
      borderRadius: 10
    },
    carta_personaje:{
        display: 'flex',
        flexDirection: 'row',
        borderWidth:3,
        borderColor:'#aadd22',
        height:150,
        margin:5,
        borderRadius: 5,
        backgroundColor:'#00aacc',
        padding:15,
    },

    imagenCarta:{
        flex:1,
        width:'100%',
        height:'100%',
        borderWidth: 4,
        borderColor:'#aadd22',
        borderRadius: 100,

    },
    infoCarta:{
        flex:2,
        padding:3,
        marginLeft: 10,
    },
    nombreText:{
        fontWeight: '800',
        fontSize: 20,
        color:'#aadd22',
        marginTop:0,
    },
    descText:{
        borderWidth: 0,        
        fontSize:15,
        fontWeight:'bold'
    },
    //Estilos Botones Paginacion
    cont_botones:{
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },  
    botones:{
        padding: 10,
        width:150,
        height:50,
        margin:10,
        borderWidth:2,
        borderColor:'#aadd22',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00aacc'
    },
    textoBoton:{
        color:'#aadd22',
        fontSize:18,
        fontWeight:'800',
    },

    //Estilos Contenedor personaje random
    cont_random:{
        marginTop:10,
        alignItems: 'center',
        width:'100%'
    },
    
    tituloRandom:{
      textTransform:'uppercase',
      fontWeight: "800",
      fontSize:20,
      color:'#3BB8DC',
    },

    boton:{
      width: 200,
      height:500,
      borderWidth: 1
    }

})

export default Estilos