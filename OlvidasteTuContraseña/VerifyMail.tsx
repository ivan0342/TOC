import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Button
} from "react-native";
import globalStyles from "../styles/globalStyles";
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext";

export default function VerifyMail() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [randomString, setRandomString] = useState("");

  // Function to send the verification email
  const enviar = async () => {
    try {
      if (!email.trim()) {  // Verifica si el campo de correo está vacío o solo contiene espacios
        alert("Por favor, ingresa un correo válido.");
        return;
      }
      // Send email and randomString to the backend
      const request = await axios.post('http://10.214.95.68:3000/api/users/VerifyEmail', {
        email,
        randomString
      });

      console.log("Verification email sent:", request.data);

      // Show alert if verification email is sent successfully
      alert("Código de verificación enviado a tu correo.");
    } catch (error) {
      console.error("Error sending verification email:", error);
    }
  };

  // Function to check if the code matches
  const confirmarCodigo = () => {
    if (!email.trim()) {  // Verifica si el campo de correo está vacío o solo contiene espacios
      alert("Por favor, ingresa un correo válido.");
      return;
    }
    if (code === randomString) {
      //const {email}=useAuth();
      navigation.navigate('ChangePassword',{email});
      

    } else {
      alert("El código de confirmación es incorrecto.");
    }
  };

  // Generate a random 6-character string
  const generateRandomString = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setRandomString(result);
  };

  // useEffect to generate randomString when component mounts
  useEffect(() => {
    generateRandomString();
  }, []);

  return (
    <View style={globalStyles.container}>
      <ImageBackground
        style={globalStyles.background}
        source={require("../images/FondoVerifyMail.png")}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Verificar Correo</Text>

          <Text style={styles.label}>Correo</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textinput}
              value={email}
              onChangeText={setEmail}
              placeholder="Ingresa tu correo"
            />
          </View>
          <Pressable style={styles.botonEnv} onPress={enviar}>
              <Text>Enviar</Text>
          </Pressable>

          <Text style={styles.label}>Código de Confirmación</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textinput}
              value={code}
              onChangeText={setCode}
              placeholder="Ingresa el código"
            />
          </View>
          <Pressable style={styles.botones} onPress={confirmarCodigo}>
            <Text style={styles.buttonText}>Siguiente</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    paddingLeft: 10, 
    backgroundColor: "#F0F0F0",
  },
  container: {
    flexDirection: "column",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 50,
  },
  title: {
    marginTop: 100,
    marginBottom: 150,
    fontSize: 32,
    fontFamily: "Bebas Neue",
  },
  botones: {
    alignItems: "center",
    marginTop: 20,
    borderWidth: 2,
    width: 215,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#E5DDEF",
    color: "#FFF",
    justifyContent: "center",
  },
  botonEnv: {
    alignItems: "center",
    marginTop: 1,
    borderWidth: 2,
    width: 215,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#E5DDEF",
    color: "#FFF",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Bebas Neue",
    fontSize: 22,
  },
  label: {
    alignSelf: "flex-start", 
    marginLeft: 20,
    marginTop: 10,
    fontSize: 16,
  },
  inputContainer: {
    width: 250,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: -3, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
    marginVertical: 100,
    marginTop:10,
    justifyContent: "center",
    alignItems:"center"
  },
});
