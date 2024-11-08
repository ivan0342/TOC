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
import { useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../AuthContext";

export const ChangePassword = ({ route }) => {
  //const {email}= useAuth();
  const { email } = route.params;
  const navigation = useNavigation();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const changePassword = async () => {
    if (!newPassword || !confirmPassword) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await axios.post(
        "http://192.168.100.27:3000/api/users/changePassword",
        { email, newPassword }
      );

      if (response.data.success) {
        Alert.alert("Éxito", "Contraseña actualizada correctamente");
        navigation.navigate("Login"); // Navegar de regreso al login
      } else {
        Alert.alert(
          "Error",
          response.data.message || "Error al cambiar la contraseña"
        );
      }
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error);
      Alert.alert("Error", "Ocurrió un problema con el servidor.");
    }
  };

  return (
    <View style={globalStyles.container}>
      <ImageBackground
        style={globalStyles.background}
        source={require("../images/FondoPassword.png")}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Cambiar Contraseña</Text>

          <Text style={styles.label}>Nueva Contraseña</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textinput}
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Ingresa la nueva contraseña"
            />
          </View>

          <Text style={styles.label}>Confirmar Contraseña</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textinput}
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirma la nueva contraseña"
            />
          </View>

          <Pressable style={styles.botones} onPress={changePassword}>
            <Text style={styles.buttonText}>Aceptar</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

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
  buttonText: {
    fontFamily: "Bebas Neue",
    fontSize: 22,
  },
  label: {
    alignSelf: "center",
    marginLeft: -5,
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
    marginVertical: 50,
    marginTop: 10,
    justifyContent: "center",
  },
});
