import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  Pressable,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";

interface TOCtest {
  id: string;
  text: string;
}

export default function TOCtest() {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  // Lista de preguntas
  const questions: TOCtest[] = [
    {
      id: "1",
      text: "¿Tienes pensamientos o imágenes no deseadas que se repiten con frecuencia?",
    },
    {
      id: "2",
      text: "¿Te sientes obligado a repetir ciertas acciones incluso cuando sabes que no es necesario?",
    },
    {
      id: "3",
      text: "¿Te molesta mucho cuando las cosas no están perfectamente ordenadas o alineadas?",
    },
    {
      id: "4",
      text: "¿Te sientes ansioso si no puedes realizar una de tus compulsiones?",
    },
    {
      id: "5",
      text: "¿Tienes un miedo persistente a los gérmenes o la contaminación?",
    },
    {
      id: "6",
      text: "¿Te encuentras verificando cosas varias veces para asegurarte de que están correctas?",
    },
  ];

  // Función para agregar o actualizar la respuesta de una pregunta
  function putAnswers(questionId: string, response: string) {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: response,
    }));
  }

  // Función para mostrar los resultados
  function Results() {
    const positiveAnswers = Object.values(answers).filter(
      (answer) => answer === "Yes"
    ).length;
    if (positiveAnswers >= 3) {
      Alert.alert(
        "Recomendación",
        "Es recomendable que hables con un profesional de la salud mental. Te recomendamos revisar nuestros centros de ayuda."
      );
    } else {
      Alert.alert(
        "Recomendación",
        "Probablemente no tienes TOC, pero si tienes dudas, te recomendamos revisar nuestros centros de ayuda."
      );
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList
          data={questions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.questionText}>{item.text}</Text>

              <View style={styles.buttons}>
                <Pressable
                  style={
                    answers[item.id] === "Yes" ? styles.btnPress : styles.button
                  }
                  onPress={() => putAnswers(item.id, "Yes")}
                >
                  <Text>Si</Text>
                </Pressable>
                <Pressable
                  style={
                    answers[item.id] === "No" ? styles.btnPress : styles.button
                  }
                  onPress={() => putAnswers(item.id, "No")}
                >
                  <Text>No</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
        <Pressable onPress={Results} style={styles.buttonResult}>
          <Text style={styles.buttonText}>Ver resultado</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F3F4F6", // Fondo claro
  },
  buttons: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  button: {
    borderRadius: 15,
    borderWidth: 1,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF", // Fondo blanco para contraste
    borderColor: "#D1D5DB", // Gris claro para el borde
    elevation: 3, // Sombra para dar profundidad
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  btnPress: {
    borderRadius: 15,
    backgroundColor: "#9BDAFE",
    borderWidth: 1,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3, // Sombra para dar profundidad
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonResult: {
    borderWidth: 1,
    width: 160,
    padding: 15,
    borderRadius: 30,
    backgroundColor: "#4F46E5", // Color llamativo para el botón de resultado
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  buttonText: {
    color: "#FFFFFF", // Texto blanco
    fontWeight: "bold",
    fontSize: 16,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 15,
    color: "#374151", // Gris oscuro para mejor contraste
  },
});
