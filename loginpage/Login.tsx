import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../styles/globalStyles";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext"; // Importar el hook de autenticación
import ProfileScreen from "../inicioScreens/ProfileScreen";

export default function Login() {
  const navigation = useNavigation();
  const { setEmail } = useAuth(); // Desestructurar setEmail del contexto
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://192.168.100.27:3000/api/users/login",
        {
          email: correo,
          contraseña, // Asegúrate de que este nombre coincida con lo que espera el servidor
        }
      );

      // Log para verificar la respuesta del servidor
      console.log("Respuesta del servidor:", response.data);

      if (response.status === 200) {
        // Log para verificar el email obtenido
        console.log("Respuesta del servidor:", response.data);
        setEmail(correo); // Establecer el correo en el contexto
        alert("Inicio de sesión exitoso");
        navigation.navigate("Inicio"); // Navegar a la pantalla principal
      }
    } catch (error) {
      // Log para ver el error completo
      console.log("Error al iniciar sesión:", error);

      // Manejo mejorado de errores
      const errorMessage =
        error.response?.data?.error || error.message || "Error desconocido";
      alert(`Inicio de sesión fallido: ${errorMessage}`);
    }
  };
  return (
    <View style={globalStyles.container}>
      <ImageBackground
        style={globalStyles.background}
        source={require("../images/Frame5.jpg")}
      >
        <Text style={styles.title}>Bienvenidos</Text>

        <View style={styles.containerLogin}>
          <Text style={styles.subtitle}>Log In</Text>
          <View style={globalStyles.line} />

          <Text style={styles.text}>Correo</Text>
          <TextInput
            style={styles.textinput}
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
          />

          <Text style={styles.text}>Contraseña</Text>
          <TextInput
            style={styles.textinput}
            value={contraseña}
            onChangeText={setContraseña}
            secureTextEntry
          />

          <Pressable style={styles.botones} onPress={handleLogin}>
            <Text style={styles.textbuttons}>Log In</Text>
          </Pressable>
          <Text
            onPress={() => navigation.navigate("VerifyMail")}
            style={styles.forgotPassword}
          >
            Olvidaste tu contraseña?
          </Text>
          <View style={globalStyles.line} />
          <Text>Registrate</Text>
          <Pressable
            style={styles.botones}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.textbuttons}>Register</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 150,
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 30,
    fontSize: 25,
    marginBottom: 30,
    fontWeight: "bold",
  },
  containerLogin: {
    flexDirection: "column",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#E6E6FA",
    borderWidth: 1,
    padding: 0,
    paddingHorizontal: 50,
    paddingBottom: 120,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 11 },
    shadowOpacity: 0.85,
    shadowRadius: 3,
    elevation: 30,
    height: 550,
  },
  textinput: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "black",
    width: 170,
    borderRadius: 20,
    padding: 3,
    backgroundColor: "white",
    marginBottom: 13,
  },
  botones: {
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    width: 170,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#B7AEF3",
    padding: 5,
    color: "white",
  },
  forgotPassword: {
    padding: 15,
    color: "blue",
    textDecorationLine: "underline",
  },
  textbuttons: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  text: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "600",
    color: "#333", // Color más oscuro para mejor contraste
  },
});
