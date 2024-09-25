// ProfileScreen.tsx
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  Alert,
  ImageBackground,
  Text,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { useAuth } from "../AuthContext";
import globalStyles from "../styles/globalStyles";

const ProfileScreen: React.FC = () => {
  const { email } = useAuth(); // Obtener el correo del contexto global
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");

  // Obtener la información del usuario cuando se monta el componente
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post(
          "http://192.168.100.17:3000/api/users/infoProfileByEmail",
          { email }  // Enviar el correo en el cuerpo de la solicitud
        );
        const userData = response.data;
        setNombre(userData.name);
        setApellidos(userData.apellidos);
        setFechaNacimiento(new Date(userData.fecha_nacimiento).toLocaleDateString());
      } catch (error) {
        Alert.alert("Error al obtener los datos del usuario", error.message);
      }
    };

    if (email) {
      fetchUserData();
    }
  }, [email]);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permiso requerido",
        "Se requiere permiso para acceder a la galería."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setPhotoUri(result.assets[0].uri);
    } else {
      Alert.alert("Selección cancelada");
    }
  };

  return (
    <View style={globalStyles.container}>
      <ImageBackground
        style={globalStyles.background}
        source={require("../images/FondoProfile.png")}
      >
        <View style={styles.containerButton}>
          <Pressable style={styles.buttonProfile} onPress={pickImage}>
            <FontAwesome name="user" size={100} color="#000" />
          </Pressable>
          {photoUri && (
            <Image source={{ uri: photoUri }} style={styles.profileImage} />
          )}
        </View>

        <View style={styles.containerDatos}>
          <View style={styles.textWithButton}>
            <Text style={styles.texto}>Nombre</Text>
            <Pressable
              onPress={() => Alert.alert("Editar nombre presionado")}
              style={styles.editButton}
            >
              <FontAwesome name="pencil" size={20} color="#000" />
            </Pressable>
          </View>
          <TextInput
            style={styles.texto}
            value={nombre}
            onChangeText={setNombre}
          />

          <View style={styles.textWithButton}>
            <Text style={styles.texto}>Apellidos</Text>
            <Pressable
              onPress={() => Alert.alert("Editar apellidos presionado")}
              style={styles.editButton}
            >
              <FontAwesome name="pencil" size={20} color="#000" />
            </Pressable>
          </View>
          <TextInput
            style={styles.texto}
            value={apellidos}
            onChangeText={setApellidos}
          />

          <Text style={styles.texto}>Fecha Nacimiento</Text>
          <TextInput
            style={styles.texto}
            value={fechaNacimiento}
            onChangeText={setFechaNacimiento}
            placeholder="DD/MM/AAAA"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 170,
    height: 170,
    marginVertical: 60,
  },
  buttonProfile: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#F9F2F2",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    marginTop: 20,
  },
  containerDatos: {
    backgroundColor: "#F1F5F6",
    width: 300,
    height: 390,
    margin: 40,
    padding: 10,
    gap: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  texto: {
    fontSize: 20,
  },
  textWithButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  editButton: {
    padding: 10,
  },
});

export default ProfileScreen;
