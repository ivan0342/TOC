import { useNavigation } from '@react-navigation/native';
import { ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import globalStyles from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { useState } from 'react';

export default function Register(){
    const navigation = useNavigation();

    // Crear estados para los campos de texto
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarContraseña, setConfirmarContraseña] = useState('');

    // Manejar el registro
    const handleRegister = async () => {
        // Verificar que las contraseñas coincidan
        if (contraseña !== confirmarContraseña) {
            alert('Las contraseñas no coinciden');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el correo
        if (!emailRegex.test(correo)) {
            alert('El formato del correo electrónico no es válido');
            return;
        }
    
        try {
            // Hacer la solicitud POST al backend para registrar al usuario
            const response = await axios.post('http://10.214.112.174:3000/api/users/register', {
                name: nombre,
                apellidos,
                fechaNacimiento,
                email: correo,
                contraseña,
                confirmarContraseña
            });
            alert('Registro exitoso');
            navigation.goBack(); // Vuelve a la pantalla anterior después de registrarse
        } catch (error) {
            alert('Error en el registro: ' + (error.response?.data?.error || error.message));
        }
    };

    return (
        <SafeAreaView style={globalStyles.container}>
            <ImageBackground style={globalStyles.background} source={require('../images/registro.jpg')}>
                <View style={styles.tittlecontainer}>
                    <Icon name="arrow-left" size={30} color="#000" onPress={() => navigation.goBack()} />
                    <Text style={styles.tittle}>Registro</Text>
                </View>
                <ScrollView>
                    <View style={styles.registercontainer}>
                        <Text style={styles.text}>Nombre:</Text>
                        <TextInput
                            style={styles.textinput}
                            value={nombre}
                            onChangeText={setNombre}
                        />

                        <Text style={styles.text}>Apellidos:</Text>
                        <TextInput
                            style={styles.textinput}
                            value={apellidos}
                            onChangeText={setApellidos}
                        />

                        <Text style={styles.text}>Fecha de nacimiento:</Text>
                        <TextInput
                            style={styles.textinput}
                            value={fechaNacimiento}
                            onChangeText={setFechaNacimiento}
                        />

                        <Text style={styles.text}>Correo electrónico:</Text>
                        <TextInput
                            style={styles.textinput}
                            value={correo}
                            onChangeText={setCorreo}
                            keyboardType="email-address"
                        />

                        <Text style={styles.text}>Contraseña:</Text>
                        <TextInput
                            style={styles.textinput}
                            value={contraseña}
                            onChangeText={setContraseña}
                            secureTextEntry
                        />

                        <Text style={styles.text}>Confirmar contraseña:</Text>
                        <TextInput
                            style={styles.textinput}
                            value={confirmarContraseña}
                            onChangeText={setConfirmarContraseña}
                            secureTextEntry
                        />

                        <Pressable style={styles.botones} onPress={handleRegister}>
                            <Text>Aceptar</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    tittlecontainer: {
       marginTop: 40,
       flexDirection: 'row',
    },
    tittle: {
        paddingHorizontal: 100,
        fontSize: 30
    },
    registercontainer: {
        flexDirection: 'column',
        marginTop: 50,
        alignItems: 'center',
    },
    textinput: {
        backgroundColor: 'white',
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'black',
        width: 250,
        height: 40,
        borderRadius: 20,
    },
    text: {
        marginTop: 15,
    },
    botones: {
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 2,
        width: 250,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#B7AEF3',
        justifyContent: 'center',
        color: '#FFF'
    },
});
