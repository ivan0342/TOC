import { useNavigation } from '@react-navigation/native';
import { ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import globalStyles from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { ScrollView } from 'react-native-gesture-handler';
import React from 'react';

export default function Register(){
    const navigation= useNavigation();
    return(
        <SafeAreaView style={globalStyles.container}>
            <ImageBackground style={globalStyles.background} source={require('../images/registro.jpg')}>
            <View style={styles.tittlecontainer}>
                <Icon name="arrow-left" size={30} color="#000" onPress={()=>navigation.goBack()} />
                <Text style={styles.tittle}>Registro</Text>
            </View>
            <ScrollView>
                <View style={styles.registercontainer}>
                    <Text style={styles.text}>Nombre:</Text>
                    <TextInput style={styles.textinput}></TextInput>

                    <Text style={styles.text}>Apellidos:</Text>
                    <TextInput style={styles.textinput}></TextInput>

                    <Text style={styles.text}>Fexha de nacimiento:</Text>
                    <TextInput style={styles.textinput}></TextInput>

                    <Text style={styles.text}>Correo electronico:</Text>
                    <TextInput style={styles.textinput}></TextInput>

                    <Text style={styles.text}>contraseña</Text>
                    <TextInput style={styles.textinput}></TextInput>

                    <Text style={styles.text}>Confirmar contraseña</Text>
                    <TextInput style={styles.textinput}></TextInput>

                    <Pressable style={styles.botones}>
                        <Text>Aceptar</Text>
                    </Pressable>
                    
                </View>
                </ScrollView>
                
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles= StyleSheet.create({
    
    tittlecontainer:{
       marginTop:40,
       flexDirection:'row',
      },
    tittle:{
        paddingHorizontal: 100,
        fontSize: 30
      },
    registercontainer:{
        flexDirection:'column',
        marginTop: 50,
        alignItems:'center',
      },
      textinput:{
        backgroundColor:'white',
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'black',
        width: 250,
        height: 40,
        borderRadius: 20,
    },
    text:{
        marginTop:15,
    },
    botones:{
        alignItems: 'center',
        marginTop:20,
        borderWidth:2,
        width: 250,
        height:40,
        borderRadius: 10,
        backgroundColor: '#B7AEF3',
        color:'#FFF'
    },
})
