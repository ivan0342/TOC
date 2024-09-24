
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import {Shadow} from 'react-native-shadow-2'
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/globalStyles';
import { useState } from 'react';
import axios from 'axios';

export default function Login(){
const navigation = useNavigation();
    const [correo,setCorreo] = useState(" ");
    const [contraseña,setContraseña] = useState(" ");

    const handdleLogin= async()=>{
        try{
            const response = await axios.post('http://10.214.107.58:3000/api/users/login',{
                email: correo,
                contraseña
            });
            if (response.status === 200) {
                alert('Inicio de sesión exitoso');
                navigation.navigate('Inicio'); // Navegar a la pantalla principal
            }
        }catch(error){
            alert("incio de secion fallido revisa bien tus datos o si ya estas registrado", error.message)
        }
    }
    return(
        <View style={globalStyles.container}>
            <ImageBackground style={globalStyles.background} source={require('../images/Frame5.jpg')}>
                <Text style={styles.title}>Bienvenidos</Text>
                    
                    <View style={styles.containerLogin}>
                        <Text style={styles.subtitle}>Log In</Text>
                        <View style={globalStyles.line} />

                        <Text>Correo</Text>
                        <TextInput 
                        style={styles.textinput}
                        value={correo}
                        onChangeText={setCorreo}
                        keyboardType="email-address"
                        ></TextInput>

                        <Text>Contraseña</Text>
                        <TextInput 
                        style={styles.textinput}
                        value ={contraseña}
                        onChangeText={setContraseña}
                        secureTextEntry
                        ></TextInput>

                        <Pressable style={styles.botones} onPress={handdleLogin} >
                            <Text style={styles.textbuttons}>Log In</Text>
                        </Pressable>
                        <Text onPress={()=>navigation.navigate('VerifyMail')} 
                        style={styles.forgotPassword}>
                            Olvidaste tu contraseña?
                            </Text>
                        <View style={globalStyles.line} />
                        <Text >Registrate</Text>
                        <Pressable style={styles.botones} onPress={()=>navigation.navigate('Register')}>
                            <Text style={styles.textbuttons}>Register</Text>
                        </Pressable>
                    </View>
            </ImageBackground>
        </View>

    );
}

const styles= StyleSheet.create({
   
    title:{
        marginTop: 150,
        fontSize: 30
    },
    subtitle:{
        marginTop:30,
        fontSize: 25,
        marginBottom: 30
    },
    containerLogin:{
        flexDirection:'column',
        marginTop: 30,
        alignItems:'center',
        justifyContent: 'space-around',
        backgroundColor: '#E6E6FA',
        borderWidth:1 ,
        padding: 0,
        paddingHorizontal: 50,
        paddingBottom: 120,
        borderRadius: 30,
        shadowColor: '#000', // Color de la sombra
        shadowOffset: { width: 0, height: 11 }, // Desplazamiento razonable
        shadowOpacity: 0.85, // Opacidad dentro del rango
        shadowRadius: 3, // Radio de difuminado ajustado
        elevation: 30,  // Para Android  
    },
    textinput:{
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'black',
        width: 170,
        borderRadius: 20,
        padding:3,
        backgroundColor:"white"
    },
    shadow:{
        marginTop:0,
    },
    botones:{
        alignItems: 'center',
        marginTop:20,
        borderWidth:1,
        width: 170,
        height:35,
        borderRadius: 20,
        backgroundColor: '#B7AEF3',
        padding:5,
        color:'white'
    },
    forgotPassword:{
        padding:15,
        color:'blue',
        textDecorationLine: 'underline',  
    },
    textbuttons:{
        color:"white"
    }
    
})