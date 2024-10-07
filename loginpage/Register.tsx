import { useNavigation } from "@react-navigation/native";
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import globalStyles from "../styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";
import React, { useState } from "react";
import axios from "axios";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Register() {
  const navigation = useNavigation();

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleRegister = async () => {
    if (contraseña !== confirmarContraseña) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (/\s/.test(contraseña)) {
      alert("La contraseña no puede contener espacios");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      alert("El formato del correo electrónico no es válido");
      return;
    }

    const formattedDate = fechaNacimiento.toISOString().split("T")[0];

    try {
      const response = await axios.post(
        "http://10.214.76.173:3000/api/users/register",
        {
          name: nombre,
          apellidos,
          fechaNacimiento: formattedDate,
          email: correo,
          contraseña,
          confirmarContraseña,
        }
      );
      alert("Registro exitoso");
      navigation.goBack();
    } catch (error) {
      alert("Error en el registro: " + error.message);
    }
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || fechaNacimiento;
    setShowDatePicker(false);
    setFechaNacimiento(currentDate);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ImageBackground
        style={globalStyles.background}
        source={require("../images/registro.jpg")}
      >
        <View style={styles.titleContainer}>
          <Icon
            name="arrow-left"
            size={30}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}>Registro</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.registerContainer}>
            <Text style={styles.text}>Nombre:</Text>
            <TextInput
              style={styles.textInput}
              value={nombre}
              onChangeText={setNombre}
              placeholder="Ingresa tu nombre"
            />

            <Text style={styles.text}>Apellidos:</Text>
            <TextInput
              style={styles.textInput}
              value={apellidos}
              onChangeText={setApellidos}
              placeholder="Ingresa tus apellidos"
            />

            <Text style={styles.text}>Fecha de nacimiento:</Text>
            <Pressable onPress={() => setShowDatePicker(true)}>
              <TextInput
                style={styles.textInput}
                value={fechaNacimiento.toLocaleDateString()}
                editable={false}
                placeholder="Selecciona tu fecha de nacimiento"
              />
            </Pressable>
            {showDatePicker && (
              <DateTimePicker
                value={fechaNacimiento}
                mode="date"
                display="default"
                onChange={onChangeDate}
              />
            )}

            <Text style={styles.text}>Correo electrónico:</Text>
            <TextInput
              style={styles.textInput}
              value={correo}
              onChangeText={setCorreo}
              keyboardType="email-address"
              placeholder="Ingresa tu correo electrónico"
            />

            <Text style={styles.text}>Contraseña:</Text>
            <TextInput
              style={styles.textInput}
              value={contraseña}
              onChangeText={setContraseña}
              secureTextEntry
              placeholder="Ingresa tu contraseña"
            />

            <Text style={styles.text}>Confirmar contraseña:</Text>
            <TextInput
              style={styles.textInput}
              value={confirmarContraseña}
              onChangeText={setConfirmarContraseña}
              secureTextEntry
              placeholder="Confirma tu contraseña"
            />

            <Pressable style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Aceptar</Text>
            </Pressable>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    paddingHorizontal: 100,
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    marginTop: 15,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },
  registerContainer: {
    flexDirection: "column",
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#E6E6FA", // Fondo blanco para el formulario
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    marginHorizontal: 20, // Añadir margen horizontal
    marginVertical: 10, // Añadir margen vertical
    borderColor: "#D1D1D1", // Borde para resaltar el contenedor
    borderWidth: 1, // Ancho del borde
  },
  textInput: {
    backgroundColor: "#F9F9F9", // Fondo gris claro para los campos
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#D1D1D1",
    width: 250,
    height: 45,
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  text: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "600",
    color: "#333", // Color más oscuro para mejor contraste
  },
  button: {
    alignItems: "center",
    marginTop: 20,
    borderWidth: 2,
    width: 250,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#8F66E6", // Color atractivo para el botón
    justifyContent: "center",
    elevation: 3,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },
});
