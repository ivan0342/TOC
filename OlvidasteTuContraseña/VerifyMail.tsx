import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import globalStyles from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import axios from "axios";

export default function VerifyMail() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [randomString, setRandomString] = useState("");

  // Function to send the verification email
  const enviar = async () => {
    try {
      if (!email.trim()) {
        alert("Por favor, ingresa un correo válido.");
        return;
      }
      const request = await axios.post(
        "http://192.168.100.27:3000/api/users/VerifyEmail",
        { email, randomString }
      );
      console.log("Verification email sent:", request.data);
      Alert.alert("Éxito", "Código de verificación enviado a tu correo.");
    } catch (error) {
      console.log("Cai aqui");
      console.error("Error sending verification email:", error);
    }
  };

  // Function to check if the code matches
  const confirmarCodigo = async () => {
    if (!email.trim()) {
      alert("Por favor, ingresa un correo válido.");
      return;
    }

    try {
      const response = await axios.post(
        "http://192.168.100.27:3000/api/users/confirmarCodigo",
        { email, code }
      );

      // Si el código es correcto, navega a la pantalla de cambiar contraseña
      if (response.status === 200) {
        navigation.navigate("ChangePassword", { email });
      }
    } catch (error) {
      if (error.response) {
        // Verificar si el error es debido a la expiración del código
        if (
          error.response.data.error === "El código de verificación ha expirado"
        ) {
          Alert.alert(
            "Error",
            "El código de verificación ha expirado. Por favor, solicita uno nuevo."
          );
        } else if (
          error.response.data.error ===
          "El código de confirmación es incorrecto"
        ) {
          alert("El código de confirmación es incorrecto.");
        } else {
          alert("Hubo un error al verificar el código.");
        }
      } else {
        console.error("Error verificando el código:", error);
      }
    }
  };

  // Generate a random 6-character string
  const generateRandomString = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setRandomString(result);
  };

  useEffect(() => {
    generateRandomString();
  }, []);

  return (
    <View style={globalStyles.container}>
      <ImageBackground
        style={globalStyles.background}
        source={require("../images/FondoVerifyMail.png")}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Text style={styles.title}>Verificar Correo</Text>

          <Text style={styles.label}>Correo</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              value={email}
              onChangeText={setEmail}
              placeholder="Ingresa tu correo"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <Pressable
            style={[styles.button, { marginBottom: 65 }]}
            onPress={enviar}
          >
            <Text style={styles.buttonText}>Enviar Código</Text>
          </Pressable>

          <Text style={styles.label}>Código de Confirmación</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              value={code}
              onChangeText={setCode}
              placeholder="Ingresa el código"
            />
          </View>
          <Pressable style={styles.button} onPress={confirmarCodigo}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    paddingTop: 100, // Manteniendo el título arriba
  },
  title: {
    fontSize: 34,
    color: "black",
    fontWeight: "bold",
    marginBottom: 175, // Espacio mayor entre el título y "Correo"
  },
  label: {
    fontSize: 18,
    color: "black",
    marginBottom: 10,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  inputContainer: {
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    marginBottom: 30, // Aumenta el espacio entre el campo de entrada y los botones
    justifyContent: "center",
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  textInput: {
    height: "100%",
    fontSize: 16,
  },
  button: {
    width: 150,
    backgroundColor: "#E5DDEF",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15, // Espacio uniforme para todos los botones
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
  },
});
