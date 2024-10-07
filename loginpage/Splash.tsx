import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const Splash = ({ navigation }) => {
  useEffect(() => {
    // Navega a la pantalla de Login después de 3 segundos
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 3000); // 3000 ms = 3 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/FondoClean.png")}
        style={styles.background}
      >
        <View style={styles.content}>
          <Image
            source={require("../images/cerebro.png")} // Ruta a tu imagen
            style={styles.image} // Estilos para la imagen
          />
          <Text style={styles.title}>TOC</Text>
          <Text style={styles.subtitle}>TRANSTORNO OBSESIVO COMPULSIVO</Text>
          <ActivityIndicator
            animating={true}
            color={MD2Colors.purple800}
            size={"large"}
            style={styles.loadingIndicator}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  content: {
    flex: 1, // Esto permite que el contenedor ocupe todo el espacio
    justifyContent: "center", // Centra verticalmente
    alignItems: "center", // Centra horizontalmente
    padding: 20, // Espaciado opcional para evitar que el contenido toque los bordes
  },
  image: {
    width: 100, // Ajusta el ancho de la imagen
    height: 100, // Ajusta la altura de la imagen
    marginBottom: 20, // Espacio debajo de la imagen
  },
  title: {
    fontSize: 50, // Tamaño grande para el título
    fontWeight: "bold",
    color: "#000000", // Color negro
    marginBottom: 10, // Espacio entre el título y el subtítulo
    fontFamily: "Bebas Neue",
  },
  subtitle: {
    fontSize: 20, // Tamaño medio para el subtítulo
    color: "#000000", // Color negro
    marginBottom: 50, // Espacio entre el subtítulo y el indicador de carga
    fontFamily: "Bebas Neue",
  },
  loadingIndicator: {
    marginTop: 20, // Espacio superior para el indicador de carga
  },
});

export default Splash;
