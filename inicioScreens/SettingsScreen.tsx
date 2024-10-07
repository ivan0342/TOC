import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  ImageBackground,
  Image,
} from "react-native";
import globalStyles from "../styles/globalStyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import ProfileScreen from "./ProfileScreen";
import React from "react";

export default function SettingsScreen() {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <ImageBackground
        style={globalStyles.background}
        source={require("../images/FondoClean.png")}
      >
        <View style={styles.content}>
          <Image
            source={require("../images/cerebro.png")} // Ruta a la imagen del cerebro
            style={styles.image} // Estilos para la imagen
          />
          <Text style={styles.title}>TOC</Text>
          <Text style={styles.subtitle}>TRANSTORNO OBSESIVO COMPULSIVO</Text>
        </View>
        <View style={styles.containerbuttons}>
          <Pressable
            style={styles.butons}
            onPress={() => navigation.navigate("ProfileScreen")}
          >
            <MaterialCommunityIcons name="account" size={24} color="black" />
            <Text>Información de cuenta</Text>
          </Pressable>

          <Pressable
            style={styles.butons}
            onPress={() => navigation.navigate("PrivacityScreen")}
          >
            <MaterialCommunityIcons name="lock" size={24} color="black" />
            <Text>Privacidad</Text>
          </Pressable>

          <Pressable
            style={styles.butons}
            onPress={() => navigation.navigate("Login")}
          >
            <MaterialCommunityIcons name="logout" size={24} color="black" />
            <Text>Cerrar sesión</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10, // Reducido para acercar la imagen al título
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 5, // Reducido para acercar el título al subtítulo
    fontFamily: "Bebas Neue",
  },
  subtitle: {
    fontSize: 20,
    color: "#000000",
    marginBottom: 5, // Reducido para acercar el subtítulo a los botones
    fontFamily: "Bebas Neue",
  },
  containerbuttons: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5, // Reducido para acercar los botones a los textos
  },
  butons: {
    backgroundColor: "#E5DDEF",
    width: 250,
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
