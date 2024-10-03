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
  Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { useAuth } from "../AuthContext";
import globalStyles from "../styles/globalStyles";

const ProfileScreen: React.FC = () => {
  const { email } = useAuth();
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post(
          "http://10.214.76.173:3000/api/users/infoProfileByEmail",
          { email }
        );
        const userData = response.data;
        setNombre(userData.name);
        setApellidos(userData.apellidos);
        setPhotoUri(userData.photoUri); // Cargar la URI de la imagen desde el backend
        const fechaNacimientoBD = userData.fecha_nacimiento; // Esto debería ser de la forma 'YYYY-MM-DD'
        if (fechaNacimientoBD) {
          const [year, month, day] = fechaNacimientoBD.split("-");
          const fechaFormateada = `${day}/${month}/${year}`; // Formato 'DD/MM/YYYY'
          setFechaNacimiento(fechaFormateada);
        } else {
          setFechaNacimiento("Fecha inválida");
        }
        setPhotoUri(userData.profile_image);
      } catch (error) {
        Alert.alert("Error al obtener los datos del usuario", error.message);
      }
    };

    if (email) {
      fetchUserData();
    }
  }, [email]);

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(
        "http://10.214.76.173:3000/api/users/updateProfile",
        {
          email,
          name: nombre,
          apellidos: apellidos,
          fecha_nacimiento: fechaNacimiento,
          profile_image: photoUri, // Enviar la URI de la imagen al servidor
        }
      );
      Alert.alert("Éxito", "Los cambios han sido guardados correctamente.");
      setIsEditing(false);
    } catch (error) {
      Alert.alert("Error al guardar los datos", error.message);
    }
  };

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
              onPress={() => setIsEditing(!isEditing)}
              style={styles.editButton}
            >
              <FontAwesome name="pencil" size={20} color="#000" />
            </Pressable>
          </View>
          <TextInput
            style={styles.texto}
            value={nombre}
            onChangeText={setNombre}
            editable={isEditing}
          />

          <View style={styles.textWithButton}>
            <Text style={styles.texto}>Apellidos</Text>
            <Pressable
              onPress={() => setIsEditing(!isEditing)}
              style={styles.editButton}
            >
              <FontAwesome name="pencil" size={20} color="#000" />
            </Pressable>
          </View>
          <TextInput
            style={styles.texto}
            value={apellidos}
            onChangeText={setApellidos}
            editable={isEditing}
          />

          <Text style={styles.texto}>Fecha Nacimiento</Text>
          <TextInput
            style={styles.texto}
            value={fechaNacimiento}
            onChangeText={setFechaNacimiento}
            placeholder="DD/MM/AAAA"
            editable={false}
          />

          <Button title="Guardar cambios" onPress={handleSaveChanges} />
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
    height: 420,
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
