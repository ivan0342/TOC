import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
} from "react-native";
import globalStyles from "../styles/globalStyles";

export const ChangePassword = () => {
  return (
    <View style={globalStyles.container}>
      <ImageBackground
        style={globalStyles.background}
        source={require("../images/FondoPassword.png")}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Cambiar Contraseña</Text>
          <Text style={styles.label}>Contraseña</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textinput} />
          </View>
          <Text style={styles.label}>Confirmar Contraseña</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textinput} />
          </View>
          <Pressable style={styles.botones}>
            <Text
              style={{
                fontFamily: "Bebas Neue",
                fontSize: 22,
              }}
            >
              Aceptar
            </Text>
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
    paddingLeft: 10, // Espaciado interno para el texto.
    backgroundColor: "#F0F0F0", // Fondo claro para resaltar la sombra.
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
    shadowOffset: { width: -3, height: -3 }, // Simula sombra desde arriba.
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4, // Para Android.
    marginVertical: 50,
    marginTop: 10,
    justifyContent: "center", // Alinea el TextInput dentro del contenedor.// Alinea el TextInput dentro del contenedor.
  },
});
