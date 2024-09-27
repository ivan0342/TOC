import React, { useEffect } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { SplashScreenProps } from "../interfaces/LoginSplash";
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
        source={require("../images/settings.jpg")}
        style={styles.background}
      >
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            animating={true}
            color={MD2Colors.purple800}
            size={"large"}
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
  loadingContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 200,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Splash;
