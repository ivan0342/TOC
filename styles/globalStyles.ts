import { Dimensions, StyleSheet } from 'react-native';

const globalStyles= StyleSheet.create({
    background: {
        flex: 1, // Esto asegura que ocupe toda la pantalla
        alignItems: 'center', // Centra los elementos hijos horizontalmente
        resizeMode:'cover',
      },
      container:{
        flex:1, 
     },
     line: {
      height: 1, // Espesor de la línea
      backgroundColor: 'black', // Color de la línea
      width: 190, // Ocupa el 100% del ancho del contenedor
      marginVertical: 10, // Espaciado vertical (opcional)
      borderStyle: 'dotted'
    },
    iconTopContainer: {
      padding: 15,
      marginTop: 40,
    },
    iconContainer: {
      alignItems:'center',
      backgroundColor: 'white',
      borderRadius: 25,
      padding: 10,
    },
    scrollViewContent: {
      flex:1,
      padding: 20,
    },
    navbarTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 110,
      backgroundColor: '#A796EF',
      paddingHorizontal: 20,
    },
    title:{
      fontSize:20,
      color:'blue'
    }
   
})

export default globalStyles;
