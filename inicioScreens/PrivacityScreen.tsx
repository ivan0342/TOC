import React from "react";
import {
  View,
  ImageBackground,
  TextInput,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import globalStyles from "../styles/globalStyles";
import { Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';

export const PrivacityScreen = () => {
  const navigation = useNavigation(); 
  return (
    <View style={globalStyles.container}>
      <ImageBackground
        style={globalStyles.background}
        source={require("../images/FondoClean.png")}
      >
        <View style={styles.containerPrincipal}>
          <Pressable
            onPress={() => navigation.goBack()} // Navegar a la pantalla anterior
            style={styles.backButton}
          >
            <FontAwesome name="arrow-left" size={40} color={"#000"} />
          </Pressable>
          <FontAwesome
            name="user-secret"
            size={200}
            color={"#000"}
            style={{ marginBottom: 50 }}
          />
          <View style={styles.containerText}>
            <Text style={styles.label}>Contraseña</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="********"
              style={styles.input}
              numberOfLines={1}
              multiline={false}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.label}>Correo</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Fulano@gmail.com"
              style={styles.input}
              numberOfLines={1}
              multiline={false}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPrincipal: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    paddingTop: 70,
  },
  containerText: {
    width: 250,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  label: {
    // Ajustar según sea necesario
    marginTop: 60,
    fontSize: 22,
    fontFamily: "Bebas Neue",
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
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: "#F0F0F0",
  },
  backButton: {
    alignSelf: "flex-start",
  },
});