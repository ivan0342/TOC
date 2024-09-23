import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
} from "react-native";
import globalStyles from "../styles/globalStyles";
import { useNavigation } from '@react-navigation/native';


export default function VerifyMail() {
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
            <TextInput style={styles.textinput} />
          </View>
          <Text style={styles.label}>Código Confirmacion</Text>
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
              Siguiente
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
    alignSelf: "flex-start", // Para alinear los textos al principio.
    marginLeft: 20, // Ajusta según la alineación deseada.
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
    marginVertical: 100,
    marginTop: 10,
    justifyContent: "center", // Alinea el TextInput dentro del contenedor.// Alinea el TextInput dentro del contenedor.
  },
});
